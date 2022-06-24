import Ajv, {
  JSONSchemaType,
  Options as AjvOptions,
  ValidateFunction,
} from 'ajv';
import addAjvFormats from 'ajv-formats';

export type ERC721TokenMetadataAttribute = {
  value: string | number;
  trait_type?: string;
};

export type ERC721TokenMetadata = {
  /**
   * Name of the item
   */
  name?: string;

  /**
   * A human readable description of the item. Markdown is supported.
   */
  description?: string;

  /**
   * This is the URL to the image of the item.
   * @example https://example.net/nfts/1.png
   * @example ipfs://Qm.../1.jpg
   * @example ar://<hash>
   */
  image?: string;

  /**
   * Raw SVG image data. Conflicts with the `image` parameter.
   */
  image_data?: string;

  /**
   * A URL to a multi-media attachment for the item.
   * The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV, and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA.
   */
  animation_url?: string;

  /**
   * A URL to a YouTube video.
   */
  youtube_url?: string;

  /**
   * The URL a user can visit to learn more about the NFT.
   */
  external_url?: string;

  /**
   * An array of attributes of the item.
   */
  attributes?: ERC721TokenMetadataAttribute[];
};

export const ERC721_TOKEN_METADATA_SCHEMA: JSONSchemaType<ERC721TokenMetadata> =
  {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        nullable: true,
      },
      description: {
        type: 'string',
        nullable: true,
      },
      image: {
        type: 'string',
        format: 'uri',
        nullable: true,
      },
      image_data: {
        type: 'string',
        nullable: true,
      },
      animation_url: {
        type: 'string',
        format: 'uri',
        nullable: true,
      },
      youtube_url: {
        type: 'string',
        format: 'uri',
        nullable: true,
      },
      external_url: {
        type: 'string',
        format: 'uri',
        nullable: true,
      },
      attributes: {
        type: 'array',
        nullable: true,
        items: {
          type: 'object',
          properties: {
            value: {
              type: ['string', 'number'],
            },
            trait_type: {
              type: 'string',
              nullable: true,
            },
          },
          required: ['value'],
        },
      },
    },
  };

export function createERC721TokenMetadataValidator(
  ajvOpts?: AjvOptions,
): ValidateFunction<ERC721TokenMetadata> {
  const ajv = new Ajv({ ...ajvOpts, allowUnionTypes: true });
  addAjvFormats(ajv);

  return ajv.compile(ERC721_TOKEN_METADATA_SCHEMA);
}
