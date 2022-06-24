import Ajv, {
  JSONSchemaType,
  Options as AjvOptions,
  ValidateFunction,
} from 'ajv';
import addAjvFormats from 'ajv-formats';

export type ERC721ContractMetadata = {
  name?: string;
  description?: string;
  image?: string;
  external_link?: string;

  /**
   * (OpenSea) Royalty fee (taken on the seller's side) expressed as basis points.
   */
  seller_fee_basis_points?: number;

  /**
   * (OpenSea) Where seller fees will be paid to.
   */
  fee_recipient?: string;

  /**
   * (Sloika) The symbol for the series (as defined in metadata).
   */
  symbol?: string;

  /**
   * (Sloika) A cover image for the series.
   */
  banner_image?: string;

  /**
   * (Sloika) An ISO-8601 formatted date/time of first availability of the series.
   */
  drop_date?: string;
};

export const ERC721_CONTRACT_METADATA_SCHEMA: JSONSchemaType<ERC721ContractMetadata> =
  {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        nullable: true,
      },
      symbol: {
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
      external_link: {
        type: 'string',
        format: 'uri',
        nullable: true,
      },
      seller_fee_basis_points: {
        type: 'integer',
        minimum: 0,
        maximum: 10_000,
        nullable: true,
      },
      fee_recipient: {
        type: 'string',
        pattern: '^0x[a-fA-F0-9]{40}$',
        nullable: true,
      },
      banner_image: {
        type: 'string',
        format: 'uri',
        nullable: true,
      },
      drop_date: {
        type: 'string',
        format: 'date-time',
        nullable: true,
      },
    },
  };

export function createERC721ContractMetadataValidator(
  ajvOpts?: AjvOptions,
): ValidateFunction<ERC721ContractMetadata> {
  const ajv = new Ajv(ajvOpts);
  addAjvFormats(ajv);

  return ajv.compile(ERC721_CONTRACT_METADATA_SCHEMA);
}
