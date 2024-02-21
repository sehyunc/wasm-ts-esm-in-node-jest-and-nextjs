import { NextApiHandler } from "next";
import { bigint_to_scalar_within_field } from "renegade-utils"

const handler: NextApiHandler = (request, response) => {
    response.status(200).json({ number: bigint_to_scalar_within_field(BigInt(1).toString(16)) });
};

export default handler;
