/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * SemVer object.
 */
export type Version = string;
/**
 * Unique identifier for ICT tool scoped on organization or user, should take the format <organization/user>/<ICT name>.
 */
export type Name = string;
/**
 * Direct link to hosted ICT container image, should take the format <registry path>/<image repository>:<tag>, registry path may be omitted and will default to Docker Hub.
 */
export type Container = string;
/**
 * Absolute path to initial script or command within packaged image.
 */
export type Entrypoint = string;
/**
 * (optional) Descriptive human-readable name, will default to `name` if omitted.
 */
export type Title = string | null;
/**
 * (optional) Brief description of plugin.
 */
export type Description = string | null;
/**
 * Author object.
 */
export type Author1 = string;
/**
 * Comma separated list of authors, each author name should take the format <first name> <last name>.
 */
export type Author = Author1[];
/**
 * Email or link to point of contact (ie. GitHub user page) for questions or issues.
 */
export type Contact = string;
/**
 * Url for public or private repository hosting source code.
 */
export type Repository = string;
/**
 * Url for hosted documentation about using or modifying the plugin.
 */
export type Documentation = string | null;
/**
 * DOI object.
 */
export type DOI = string;
/**
 * Unique input or output name for this plugin, case-sensitive match to corresponding variable expected by tool.
 */
export type Name1 = string;
/**
 * Types enum for IO.
 */
export type TypesEnum = "string" | "number" | "array" | "boolean" | "path";
/**
 * Short text description of expected value for field.
 */
export type Description1 = string | null;
/**
 * Boolean (true/false) value indicating whether this field needs an associated value.
 */
export type Required = boolean;
/**
 * Defines the actual value(s) that the input/output parameter representsrepresents using an ontology schema.
 */
export type Format =
  | string[]
  | {
      [k: string]: unknown;
    };
export type Inputs = IO[];
export type Outputs = IO[];
/**
 * UIKey object.
 */
export type UIKey = string;
/**
 * User friendly label used in UI.
 */
export type Title1 = string;
/**
 * Short user friendly instructions for selecting appropriate parameter.
 */
export type Description2 = string | null;
/**
 * Optional label for a non-standard expected user interface.
 */
export type Customtype = string | null;
/**
 * ConditionalStatement object.
 */
export type ConditionalStatement = string;
/**
 * Prefilled value.
 */
export type Default = string | null;
/**
 * Regular expression for validation.
 */
export type Regex = string | null;
/**
 * Boolean value to add text formatting toolbar.
 */
export type Toolbar = boolean | null;
/**
 * Defines the expected user interface based on a set of basic UI types.
 */
export type Type = "text";
/**
 * User friendly label used in UI.
 */
export type Title2 = string;
/**
 * Short user friendly instructions for selecting appropriate parameter.
 */
export type Description3 = string | null;
/**
 * Optional label for a non-standard expected user interface.
 */
export type Customtype1 = string | null;
/**
 * Prefilled value.
 */
export type Default1 = number | number | null;
/**
 * Boolean value to force integers only.
 */
export type Integer = boolean | null;
/**
 * Minimum and maximum range as a tuple.
 */
export type Range = [unknown, unknown] | null;
/**
 * Defines the expected user interface based on a set of basic UI types.
 */
export type Type1 = "number";
/**
 * User friendly label used in UI.
 */
export type Title3 = string;
/**
 * Short user friendly instructions for selecting appropriate parameter.
 */
export type Description4 = string | null;
/**
 * Optional label for a non-standard expected user interface.
 */
export type Customtype2 = string | null;
/**
 * Prefilled value, either `true` or `false`.
 */
export type Default2 = boolean | null;
/**
 * Defines the expected user interface based on a set of basic UI types.
 */
export type Type2 = "checkbox";
/**
 * User friendly label used in UI.
 */
export type Title4 = string;
/**
 * Short user friendly instructions for selecting appropriate parameter.
 */
export type Description5 = string | null;
/**
 * Optional label for a non-standard expected user interface.
 */
export type Customtype3 = string | null;
/**
 * Required array of options.
 */
export type Fields = string[];
/**
 * Leave blank by default.
 */
export type Optional = boolean | null;
/**
 * Defines the expected user interface based on a set of basic UI types.
 */
export type Type3 = "select";
/**
 * User friendly label used in UI.
 */
export type Title5 = string;
/**
 * Short user friendly instructions for selecting appropriate parameter.
 */
export type Description6 = string | null;
/**
 * Optional label for a non-standard expected user interface.
 */
export type Customtype4 = string | null;
/**
 * Required array of options.
 */
export type Fields1 = string[];
/**
 * Leave blank by default.
 */
export type Optional1 = boolean | null;
/**
 * Maximum number of selections.
 */
export type Limit = number | null;
/**
 * Defines the expected user interface based on a set of basic UI types.
 */
export type Type4 = "multiselect";
/**
 * User friendly label used in UI.
 */
export type Title6 = string;
/**
 * Short user friendly instructions for selecting appropriate parameter.
 */
export type Description7 = string | null;
/**
 * Optional label for a non-standard expected user interface.
 */
export type Customtype5 = string | null;
/**
 * Array of preset RGB selections.
 */
export type Fields2 = number[];
/**
 * Defines the expected user interface based on a set of basic UI types.
 */
export type Type5 = "color";
/**
 * User friendly label used in UI.
 */
export type Title7 = string;
/**
 * Short user friendly instructions for selecting appropriate parameter.
 */
export type Description8 = string | null;
/**
 * Optional label for a non-standard expected user interface.
 */
export type Customtype6 = string | null;
/**
 * W3Format enum.
 */
export type W3Format =
  | "YYYY"
  | "YYYY-MM"
  | "YYYY-MM-DD"
  | "YYYY-MM-DDThh:mmTZD"
  | "YYYY-MM-DDThh:mm:ssTZD"
  | "YYYY-MM-DDThh:mm:ss.sTZD";
/**
 * Defines the expected user interface based on a set of basic UI types.
 */
export type Type6 = "datetime";
/**
 * User friendly label used in UI.
 */
export type Title8 = string;
/**
 * Short user friendly instructions for selecting appropriate parameter.
 */
export type Description9 = string | null;
/**
 * Optional label for a non-standard expected user interface.
 */
export type Customtype7 = string | null;
/**
 * Array of allowed file extensions.
 */
export type Ext = string[] | null;
/**
 * Defines the expected user interface based on a set of basic UI types.
 */
export type Type7 = "path";
/**
 * User friendly label used in UI.
 */
export type Title9 = string;
/**
 * Short user friendly instructions for selecting appropriate parameter.
 */
export type Description10 = string | null;
/**
 * Optional label for a non-standard expected user interface.
 */
export type Customtype8 = string | null;
/**
 * Array of allowed file extensions.
 */
export type Ext1 = string[] | null;
/**
 * Maximum number of uploaded files.
 */
export type Limit1 = number | null;
/**
 * Total size file limit.
 */
export type Size = number | null;
/**
 * Defines the expected user interface based on a set of basic UI types.
 */
export type Type8 = "file";
export type Ui = (UIText | UINumber | UICheckbox | UISelect | UIMultiselect | UIColor | UIDatetime | UIPath | UIFile)[];
/**
 * Any non-standard or specific processor limitations.
 */
export type Type9 = string | null;
/**
 * Minimum requirement for CPU allocation where 1 CPU unit is equivalent to 1 physical CPU core or 1 virtual core.
 */
export type Min = string | null;
/**
 * Recommended requirement for CPU allocation for optimal performance.
 */
export type Recommended = string | null;
/**
 * Minimum requirement for memory allocation, measured in bytes.
 */
export type Min1 = string | null;
/**
 * Recommended requirement for memory allocation for optimal performance.
 */
export type Recommended1 = string | null;
/**
 * Boolean value indicating if the plugin is optimized for GPU.
 */
export type Enabled = boolean | null;
/**
 * Boolean value indicating if the plugin requires a GPU to run.
 */
export type Required1 = boolean | null;
/**
 * 	Any identifying label for GPU hardware specificity.
 */
export type Type10 = string | null;

/**
 * ICT object.
 */
export interface ICT {
  /**
   * Version of ICT specification yaml schema.
   */
  specVersion: Version;
  name: Name;
  /**
   * Version of ICT, semantic versioning is recommended.
   */
  version: Version;
  container: Container;
  entrypoint: Entrypoint;
  title?: Title;
  description?: Description;
  author: Author;
  contact: Contact;
  repository: Repository;
  documentation?: Documentation;
  /**
   * DOI link to relevant citation, plugin user should use this citation when using this plugin.
   */
  citation?: DOI | null;
  inputs: Inputs;
  outputs: Outputs;
  ui: Ui;
  hardware?: HardwareRequirements | null;
  [k: string]: unknown;
}
/**
 * IO BaseModel.
 */
export interface IO {
  name: Name1;
  /**
   * Defines the parameter passed to the ICT tool based on broad categories of basic types.
   */
  type: TypesEnum;
  description?: Description1;
  required: Required;
  format: Format;
  [k: string]: unknown;
}
/**
 * Any arbitrary length string.
 */
export interface UIText {
  /**
   * Identifier to connect UI configuration to specific parameter, should take the form <inputs or outputs>.<parameter name>.
   */
  key: UIKey;
  title: Title1;
  description?: Description2;
  customType?: Customtype;
  /**
   * Conditional statement that resolves to a boolean value based on UI configuration and selected value, used to dictate relationship between parameters.
   */
  condition?: ConditionalStatement;
  default?: Default;
  regex?: Regex;
  toolbar?: Toolbar;
  type: Type;
}
/**
 * Any numerical value.
 */
export interface UINumber {
  /**
   * Identifier to connect UI configuration to specific parameter, should take the form <inputs or outputs>.<parameter name>.
   */
  key: UIKey;
  title: Title2;
  description?: Description3;
  customType?: Customtype1;
  /**
   * Conditional statement that resolves to a boolean value based on UI configuration and selected value, used to dictate relationship between parameters.
   */
  condition?: ConditionalStatement;
  default?: Default1;
  integer?: Integer;
  range?: Range;
  type: Type1;
}
/**
 * Boolean operator, checked for `true` unchecked for `false`.
 */
export interface UICheckbox {
  /**
   * Identifier to connect UI configuration to specific parameter, should take the form <inputs or outputs>.<parameter name>.
   */
  key: UIKey;
  title: Title3;
  description?: Description4;
  customType?: Customtype2;
  /**
   * Conditional statement that resolves to a boolean value based on UI configuration and selected value, used to dictate relationship between parameters.
   */
  condition?: ConditionalStatement;
  default?: Default2;
  type: Type2;
}
/**
 * Single string value from a set of options.
 */
export interface UISelect {
  /**
   * Identifier to connect UI configuration to specific parameter, should take the form <inputs or outputs>.<parameter name>.
   */
  key: UIKey;
  title: Title4;
  description?: Description5;
  customType?: Customtype3;
  /**
   * Conditional statement that resolves to a boolean value based on UI configuration and selected value, used to dictate relationship between parameters.
   */
  condition?: ConditionalStatement;
  fields: Fields;
  optional?: Optional;
  type: Type3;
}
/**
 * One or more string values from a set of options.
 */
export interface UIMultiselect {
  /**
   * Identifier to connect UI configuration to specific parameter, should take the form <inputs or outputs>.<parameter name>.
   */
  key: UIKey;
  title: Title5;
  description?: Description6;
  customType?: Customtype4;
  /**
   * Conditional statement that resolves to a boolean value based on UI configuration and selected value, used to dictate relationship between parameters.
   */
  condition?: ConditionalStatement;
  fields: Fields1;
  optional?: Optional1;
  limit?: Limit;
  type: Type4;
}
/**
 * Color values passed as RGB color values.
 */
export interface UIColor {
  /**
   * Identifier to connect UI configuration to specific parameter, should take the form <inputs or outputs>.<parameter name>.
   */
  key: UIKey;
  title: Title6;
  description?: Description7;
  customType?: Customtype5;
  /**
   * Conditional statement that resolves to a boolean value based on UI configuration and selected value, used to dictate relationship between parameters.
   */
  condition?: ConditionalStatement;
  fields: Fields2;
  type: Type5;
}
/**
 * Standardized date and time values.
 */
export interface UIDatetime {
  /**
   * Identifier to connect UI configuration to specific parameter, should take the form <inputs or outputs>.<parameter name>.
   */
  key: UIKey;
  title: Title7;
  description?: Description8;
  customType?: Customtype6;
  /**
   * Conditional statement that resolves to a boolean value based on UI configuration and selected value, used to dictate relationship between parameters.
   */
  condition?: ConditionalStatement;
  /**
   * Datetime format using W3C conventions.
   */
  format: W3Format;
  type: Type6;
}
/**
 * Absolute or relative path to file/directory using Unix conventions.
 */
export interface UIPath {
  /**
   * Identifier to connect UI configuration to specific parameter, should take the form <inputs or outputs>.<parameter name>.
   */
  key: UIKey;
  title: Title8;
  description?: Description9;
  customType?: Customtype7;
  /**
   * Conditional statement that resolves to a boolean value based on UI configuration and selected value, used to dictate relationship between parameters.
   */
  condition?: ConditionalStatement;
  ext?: Ext;
  type: Type7;
}
/**
 * User uploaded binary data.
 */
export interface UIFile {
  /**
   * Identifier to connect UI configuration to specific parameter, should take the form <inputs or outputs>.<parameter name>.
   */
  key: UIKey;
  title: Title9;
  description?: Description10;
  customType?: Customtype8;
  /**
   * Conditional statement that resolves to a boolean value based on UI configuration and selected value, used to dictate relationship between parameters.
   */
  condition?: ConditionalStatement;
  ext?: Ext1;
  limit?: Limit1;
  size?: Size;
  type: Type8;
}
/**
 * HardwareRequirements object.
 */
export interface HardwareRequirements {
  /**
   * CPU requirements.
   */
  cpu?: CPU | null;
  /**
   * Memory requirements.
   */
  memory?: Memory | null;
  /**
   * GPU requirements.
   */
  gpu?: GPU | null;
  [k: string]: unknown;
}
/**
 * CPU object.
 */
export interface CPU {
  type?: Type9;
  min?: Min;
  recommended?: Recommended;
  [k: string]: unknown;
}
/**
 * Memory object.
 */
export interface Memory {
  min?: Min1;
  recommended?: Recommended1;
  [k: string]: unknown;
}
/**
 * GPU object.
 */
export interface GPU {
  enabled?: Enabled;
  required?: Required1;
  type?: Type10;
  [k: string]: unknown;
}
