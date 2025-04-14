/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { PermitHash, PermitHashInterface } from "../PermitHash";

const _abi = [
  {
    type: "function",
    name: "_PERMIT_BATCH_TRANSFER_FROM_TYPEHASH",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "_PERMIT_BATCH_TYPEHASH",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "_PERMIT_BATCH_WITNESS_TRANSFER_FROM_TYPEHASH_STUB",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "_PERMIT_DETAILS_TYPEHASH",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "_PERMIT_SINGLE_TYPEHASH",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "_PERMIT_TRANSFER_FROM_TYPEHASH",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "_PERMIT_TRANSFER_FROM_WITNESS_TYPEHASH_STUB",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "_TOKEN_PERMISSIONS_TYPEHASH",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "_TOKEN_PERMISSIONS_TYPESTRING",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
] as const;

const _bytecode =
  "0x6103c1610035600b8282823980515f1a60731461002957634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100aa575f3560e01c806378f168301161007d57806390bbf2f31161006357806390bbf2f314610199578063c0c7fa7e146101a1578063c5df4f03146101a9575f80fd5b806378f168301461015d57806384b8efbb14610184575f80fd5b80633eb8b8fd146100ae578063415e982d146100e85780636302c3cf1461010f5780636e4f277514610136575b5f80fd5b6100d57ffcf35f5ac6a2c28868dc44c302166470266239195f02b0ee408334829333b76681565b6040519081526020015b60405180910390f35b6100d57f618358ac3db8dc274f0cd8829da7e234bd48cd73c4a740aede1adec9846d06a181565b6100d57faf1b0d30d2cab0380e68f0689007e3254993c596f2fdd0aaa7f4d04f7944086381565b6100d57f65626cad6cb96493bf6f5ebea28756c966f023ab9e8a83a7101849d5573b367881565b6100d57f939c21a48a8dbe3a9a2404a1d46691e4d39f6583d6ec6b35714604c986d8010681565b61018c6101d0565b6040516100df9190610224565b61018c6101ec565b61018c610208565b6100d57ff3841cd1ff0085026a6327b620b67997ce40f282c88a8e905a7a5626e310f3d081565b6040518060a00160405280606481526020016103286064913981565b6040518060a00160405280606b815260200161028f606b913981565b6040518060600160405280602e81526020016102fa602e913981565b5f602080835283518060208501525f5b8181101561025057858101830151858201604001528201610234565b505f6040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f830116850101925050509291505056fe5065726d697442617463685769746e6573735472616e7366657246726f6d28546f6b656e5065726d697373696f6e735b5d207065726d69747465642c61646472657373207370656e6465722c75696e74323536206e6f6e63652c75696e7432353620646561646c696e652c546f6b656e5065726d697373696f6e73286164647265737320746f6b656e2c75696e7432353620616d6f756e74295065726d69745769746e6573735472616e7366657246726f6d28546f6b656e5065726d697373696f6e73207065726d69747465642c61646472657373207370656e6465722c75696e74323536206e6f6e63652c75696e7432353620646561646c696e652ca264697066735822122091e71754083807aa7a8dfc38393f39de23fb3777d742b240cb3cd64cbf9b739664736f6c63430008160033";

type PermitHashConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PermitHashConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PermitHash__factory extends ContractFactory {
  constructor(...args: PermitHashConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PermitHash> {
    return super.deploy(overrides || {}) as Promise<PermitHash>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PermitHash {
    return super.attach(address) as PermitHash;
  }
  override connect(signer: Signer): PermitHash__factory {
    return super.connect(signer) as PermitHash__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PermitHashInterface {
    return new utils.Interface(_abi) as PermitHashInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PermitHash {
    return new Contract(address, _abi, signerOrProvider) as PermitHash;
  }
}
