/**
 Returns the Capitalized form of a string
 ```javascript
 'innerHTML'.capitalize()         // 'InnerHTML'
 'action_name'.capitalize()       // 'Action_name'
 'css-class-name'.capitalize()    // 'Css-class-name'
 'my favorite items'.capitalize() // 'My favorite items'
 ```
 @method capitalize
 @param {String} str The string to capitalize.
 @return {String} The capitalized string.
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.substr(1)
}

export function isPresent<T>(value: T): value is NonNullable<T> {
  return value != null
}

export type Nullable<T> = T extends null | undefined ? T : never
export function isBlank<T>(value: T): value is Nullable<T> {
  return value == null
}
export function isString(value: unknown): value is string {
  return typeof value === 'string'
}
