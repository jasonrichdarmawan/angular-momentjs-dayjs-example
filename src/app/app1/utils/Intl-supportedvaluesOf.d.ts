declare namespace Intl {
    type Key = 'calendar' | 'collation' | 'currency' | 'numberingSystem' | 'timeZone' | 'unit';
  
    /**
     * @deprecated will not be required in TypeScript 5.1
     */
    function supportedValuesOf(input: Key): string[];
}