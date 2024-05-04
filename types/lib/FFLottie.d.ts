declare namespace FFCreatorSpace {
  interface FFLottieConfProps {
    data?: any; // Adjust the type according to what `data` should represent
    file?: string;
    filepath?: string;
    loop?: boolean;
    width?: number;
    height?: number;
  }

  /**
   * FFLottie - Lottie-node is an API for running Lottie with the canvas renderer in Node.js, with the help of node-canvas.
   * This is intended for rendering Lottie animations to images or video.
   * @extends FFImage
   */
  class FFLottie extends FFImage {
    constructor(conf?: FFLottieConfProps);

    /**
     * Get the width and height of the chart component
     * @returns [width, height] array
     */
    getWH(): [number, number];

    /**
     * Set text font file path
     * @param font text font file path
     */
    setFont(font: string): void;

    /**
     * Modify the Image in the lottie json data.
     * @param id id of the material
     * @param path new material path
     * @param absolute whether the path is absolute or relative
     */
    replaceAsset(id: number | string, path: string, absolute?: boolean): void;

    /**
     * Modify the Text in the lottie json data.
     * @param target the target value
     * @param txt new txt value
     */
    replaceText(target: string, txt: string): void;

    /**
     * Find a specific layer element
     * @param key the key value
     * @returns elements found
     */
    findElements(key: string): any; // Adjust the return type according to what findElements should return

    /**
     * Get lottie-api instance
     * @returns the API instance
     */
    getApi(): any;

    /**
     * Start rendering
     */
    start(): void;

    /**
     * Destroys the instance and cleans up resources
     */
    destroy(): void;
  }
}
