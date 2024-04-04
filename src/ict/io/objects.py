"""IO objects for ICT."""

import enum
import re
from typing import Optional, Union, Any

from pydantic import BaseModel, Field

# dict used to map an ICT I/O
# type to a CWL I/O type
CWL_IO_DICT: dict[str, str] = {
    "string": "string",
    "number": "double",
    "array": "string",
    "boolean": "boolean",
    # TODO: File vs Directory?
}


class TypesEnum(str, enum.Enum):
    """Types enum for ICT IO."""

    STRING = "string"
    NUMBER = "number"
    ARRAY = "array"
    BOOLEAN = "boolean"
    PATH = "path"


# def _get_cwl_type(io_name: str, io_type: str) -> str:
def _get_cwl_type(io_type: str) -> str:
    """Return the CWL type from the ICT IO type."""
    if io_type == "path":
        # NOTE: for now, default to directory
        # this needs to be addressed
        # path could be File or Directory
        return "Directory"
        # if bool(re.search("dir", io_name, re.I)):
        #     return "Directory"
        # return "File"
    return CWL_IO_DICT[io_type]


class IO(BaseModel):
    """IO BaseModel."""

    name: str = Field(
        description="Unique input or output name for this plugin, case-sensitive match to corresponding variable expected by tool.",
        examples=["thresholdtype"],
    )
    io_type: TypesEnum = Field(
        ...,
        alias="type",
        description="Defines the parameter passed to the ICT tool based on broad categories of basic types.",
        examples=["string"],
    )
    description: Optional[str] = Field(
        None,
        description="Short text description of expected value for field.",
        examples=["Algorithm type for thresholding"],
    )
    defaultValue: Optional[Any] = Field(
        None,
        description="Optional default value.",
        examples=["42"],
    )
    required: bool = Field(
        description="Boolean (true/false) value indicating whether this "
        + "field needs an associated value.",
        examples=["true"],
    )
    io_format: Union[list[str], dict] = Field(
        ...,
        alias="format",
        description="Defines the actual value(s) that the input/output parameter"
        + "represents using an ontology schema.",
    )  # TODO ontology

    @property
    def _is_optional(self):
        """Return '' if required, '?' if default exists, else '?'."""
        if self.defaultValue != None:
            return "?"
        elif self.required:
            return ""
        else:
            return "?"
        
    def convert_uri_format(self, uri_format):
        """Convert to cwl format
        Args:
            format (_type_): _description_
        """
        return f"edam:format_{uri_format.split('_')[-1]}"

    def _input_to_cwl(self):
        """Convert inputs to CWL."""
        cwl_dict_ = {
            "inputBinding": {"prefix": f"--{self.name}"},
            # "type": f"{_get_cwl_type(self.name, self.io_type)}{self._is_optional}",
            "type": f"{_get_cwl_type(self.io_type)}{self._is_optional}",
        }
        if self.io_format.get('uri', None) is not None:
            cwl_dict_['format'] = self.convert_uri_format(self.io_format['uri'])
        if self.defaultValue is not None:
            cwl_dict_["default"] = self.defaultValue
        return cwl_dict_

    def _output_to_cwl(self, inputs):
        """Convert outputs to CWL."""
        if self.io_type == "path":
            if self.name in inputs:
                if self.io_format['term'].lower()=='directory':
                    cwl_type = "Directory"
                elif self.io_format['term'].lower()=='file':
                    cwl_type = "File"
                cwl_dict_ = {
                    "outputBinding": {"glob": f"$(inputs.{self.name}.basename)"},
                    "type": cwl_type,
                }
                if self.io_format.get('uri', None) is not None:
                    cwl_dict_['format'] = self.convert_uri_format(self.io_format['uri'])
                return cwl_dict_
            else:
                raise ValueError(f"Output {self.name} not found in inputs")
        raise NotImplementedError(f"Output not supported {self.name}")
