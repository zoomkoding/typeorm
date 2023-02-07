import type { ColumnOptions } from "../decorator/options/ColumnOptions"

/**
 * Arguments for InheritanceMetadata class.
 */
export interface InheritanceMetadataArgs {
    /**
     * Class to which inheritance is applied.
     */
    readonly target?: Function | string

    /**
     * Inheritance pattern.
     */
    readonly pattern: "STI" /*|"CTI"*/

    /**
     * Column used as inheritance discriminator column.
     */
    readonly column?: ColumnOptions
}
