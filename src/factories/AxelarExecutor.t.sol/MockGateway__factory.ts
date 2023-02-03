/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  MockGateway,
  MockGatewayInterface,
} from "../../AxelarExecutor.t.sol/MockGateway";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
    ],
    name: "setTokenAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "tokenAddresses",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "validateContractCall",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "validateContractCallAndMint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506104e2806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806317456e56146100515780631876eed9146100665780635f6970c314610097578063935b13f6146100b1575b600080fd5b61006461005f36600461025a565b610117565b005b61008261007436600461030e565b600198975050505050505050565b60405190151581526020015b60405180910390f35b6100826100a53660046103be565b60019695505050505050565b6100f26100bf366004610440565b805160208183018101805160008252928201919093012091525473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161008e565b80600083604051610128919061047d565b908152604051908190036020019020805473ffffffffffffffffffffffffffffffffffffffff929092167fffffffffffffffffffffffff00000000000000000000000000000000000000009092169190911790555050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f8301126101c057600080fd5b813567ffffffffffffffff808211156101db576101db610180565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561022157610221610180565b8160405283815286602085880101111561023a57600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806040838503121561026d57600080fd5b823567ffffffffffffffff81111561028457600080fd5b610290858286016101af565b925050602083013573ffffffffffffffffffffffffffffffffffffffff811681146102ba57600080fd5b809150509250929050565b60008083601f8401126102d757600080fd5b50813567ffffffffffffffff8111156102ef57600080fd5b60208301915083602082850101111561030757600080fd5b9250929050565b60008060008060008060008060c0898b03121561032a57600080fd5b88359750602089013567ffffffffffffffff8082111561034957600080fd5b6103558c838d016102c5565b909950975060408b013591508082111561036e57600080fd5b61037a8c838d016102c5565b909750955060608b0135945060808b013591508082111561039a57600080fd5b506103a78b828c016101af565b92505060a089013590509295985092959890939650565b600080600080600080608087890312156103d757600080fd5b86359550602087013567ffffffffffffffff808211156103f657600080fd5b6104028a838b016102c5565b9097509550604089013591508082111561041b57600080fd5b5061042889828a016102c5565b979a9699509497949695606090950135949350505050565b60006020828403121561045257600080fd5b813567ffffffffffffffff81111561046957600080fd5b610475848285016101af565b949350505050565b6000825160005b8181101561049e5760208186018101518583015201610484565b50600092019182525091905056fea26469706673582212203b638e3a7bd4ccd10660fc0fd5d72c08baf3c8b9d66d4305f5244479fdcc494b64736f6c63430008110033";

type MockGatewayConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockGatewayConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockGateway__factory extends ContractFactory {
  constructor(...args: MockGatewayConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockGateway> {
    return super.deploy(overrides || {}) as Promise<MockGateway>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockGateway {
    return super.attach(address) as MockGateway;
  }
  override connect(signer: Signer): MockGateway__factory {
    return super.connect(signer) as MockGateway__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockGatewayInterface {
    return new utils.Interface(_abi) as MockGatewayInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockGateway {
    return new Contract(address, _abi, signerOrProvider) as MockGateway;
  }
}
