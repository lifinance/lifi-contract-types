/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  GasZipPeriphery,
  GasZipPeripheryInterface,
} from "../GasZipPeriphery";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_gasZipRouter",
        type: "address",
        internalType: "address",
      },
      {
        name: "_liFiDEXAggregator",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "receive",
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "depositToGasZipERC20",
    inputs: [
      {
        name: "_swapData",
        type: "tuple",
        internalType: "struct LibSwap.SwapData",
        components: [
          {
            name: "callTo",
            type: "address",
            internalType: "address",
          },
          {
            name: "approveTo",
            type: "address",
            internalType: "address",
          },
          {
            name: "sendingAssetId",
            type: "address",
            internalType: "address",
          },
          {
            name: "receivingAssetId",
            type: "address",
            internalType: "address",
          },
          {
            name: "fromAmount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "callData",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "requiresDeposit",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
      {
        name: "_gasZipData",
        type: "tuple",
        internalType: "struct IGasZip.GasZipData",
        components: [
          {
            name: "destinationChains",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "receiver",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "depositToGasZipNative",
    inputs: [
      {
        name: "_gasZipData",
        type: "tuple",
        internalType: "struct IGasZip.GasZipData",
        components: [
          {
            name: "destinationChains",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "receiver",
            type: "bytes32",
            internalType: "bytes32",
          },
        ],
      },
      {
        name: "_amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "gasZipRouter",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IGasZip",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getDestinationChainsValue",
    inputs: [
      {
        name: "_chainIds",
        type: "uint8[]",
        internalType: "uint8[]",
      },
    ],
    outputs: [
      {
        name: "destinationChains",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "liFiDEXAggregator",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "LiFiGenericSwapCompleted",
    inputs: [
      {
        name: "transactionId",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "integrator",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "referrer",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "receiver",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "fromAssetId",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "toAssetId",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "fromAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "toAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "LiFiSwappedGeneric",
    inputs: [
      {
        name: "transactionId",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "integrator",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "referrer",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "fromAssetId",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "toAssetId",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "fromAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "toAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "LiFiTransferCompleted",
    inputs: [
      {
        name: "transactionId",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "receivingAssetId",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "receiver",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "LiFiTransferRecovered",
    inputs: [
      {
        name: "transactionId",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "receivingAssetId",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "receiver",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "LiFiTransferStarted",
    inputs: [
      {
        name: "bridgeData",
        type: "tuple",
        indexed: false,
        internalType: "struct ILiFi.BridgeData",
        components: [
          {
            name: "transactionId",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "bridge",
            type: "string",
            internalType: "string",
          },
          {
            name: "integrator",
            type: "string",
            internalType: "string",
          },
          {
            name: "referrer",
            type: "address",
            internalType: "address",
          },
          {
            name: "sendingAssetId",
            type: "address",
            internalType: "address",
          },
          {
            name: "receiver",
            type: "address",
            internalType: "address",
          },
          {
            name: "minAmount",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "destinationChainId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "hasSourceSwaps",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "hasDestinationCall",
            type: "bool",
            internalType: "bool",
          },
        ],
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "InsufficientBalance",
    inputs: [
      {
        name: "required",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "balance",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "InvalidAmount",
    inputs: [],
  },
  {
    type: "error",
    name: "NativeAssetTransferFailed",
    inputs: [],
  },
  {
    type: "error",
    name: "NoTransferToNullAddress",
    inputs: [],
  },
  {
    type: "error",
    name: "NullAddrIsNotAValidSpender",
    inputs: [],
  },
  {
    type: "error",
    name: "NullAddrIsNotAnERC20Token",
    inputs: [],
  },
  {
    type: "error",
    name: "ReentrancyError",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x60c060405234801561001057600080fd5b506040516113ef3803806113ef83398101604081905261002f91610062565b6001600160a01b039182166080521660a052610095565b80516001600160a01b038116811461005d57600080fd5b919050565b6000806040838503121561007557600080fd5b61007e83610046565b915061008c60208401610046565b90509250929050565b60805160a0516113216100ce6000396000818160af0152818161038d01526103ec015260008181610108015261025501526113216000f3fe60806040526004361061005e5760003560e01c8063ba956b9a11610043578063ba956b9a146100f6578063ee35f52e1461012a578063f477f9991461013f57600080fd5b806346fd98e21461006a5780638672976d1461009d57600080fd5b3661006557005b600080fd5b34801561007657600080fd5b5061008a610085366004610f43565b61015f565b6040519081526020015b60405180910390f35b3480156100a957600080fd5b506100d17f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610094565b34801561010257600080fd5b506100d17f000000000000000000000000000000000000000000000000000000000000000081565b61013d610138366004611038565b61021c565b005b34801561014b57600080fd5b5061013d61015a366004611063565b61035b565b60006020825111156101d2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f546f6f206d616e7920636861696e20494473000000000000000000000000000060448201526064015b60405180910390fd5b60005b8251811015610216578281815181106101f0576101f06110b7565b602002602001015160ff16600883901b179150808061020e90611115565b9150506101d5565b50919050565b6040517fc9630cb000000000000000000000000000000000000000000000000000000000815282356004820152602083013560248201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063c9630cb09083906044016000604051808303818588803b1580156102af57600080fd5b505af11580156102c3573d6000803e3d6000fd5b504793505082159150610356905057604051600090339083908381818185875af1925050503d8060008114610314576040519150601f19603f3d011682016040523d82523d6000602084013e610319565b606091505b5050905080610354576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b505050565b61037861036e606084016040850161114d565b83608001356104a5565b6103d261038b606084016040850161114d565b7f00000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61061b565b60008073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001661041960a086018661118a565b6040516104279291906111f6565b6000604051808303816000865af19150503d8060008114610464576040519150601f19603f3d011682016040523d82523d6000602084013e610469565b606091505b50915091508161047c5761047c8161075e565b6000818060200190518101906104929190611206565b905061049e848261021c565b5050505050565b806000036104df576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105385780341015610534576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156105a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c99190611206565b90508181101561060f576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016101c9565b61035683333085610768565b73ffffffffffffffffffffffffffffffffffffffff831661063b57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610688576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156106fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107219190611206565b10156103565761073383836000610982565b61035683837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610982565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff84166107b5576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610802576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610873573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108979190611206565b90506108a582868686610b82565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610915573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109399190611206565b610943919061121f565b1461097a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b801580610a2257506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156109fc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a209190611206565b155b610aae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016101c9565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526103569084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610be0565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526103549085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610b00565b6000610c42826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610cef9092919063ffffffff16565b9050805160001480610c63575080806020019051810190610c639190611238565b610356576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016101c9565b6060610cfe8484600085610d06565b949350505050565b606082471015610d98576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016101c9565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610dc1919061127e565b60006040518083038185875af1925050503d8060008114610dfe576040519150601f19603f3d011682016040523d82523d6000602084013e610e03565b606091505b5091509150610e1487838387610e1f565b979650505050505050565b60608315610eb5578251600003610eae5773ffffffffffffffffffffffffffffffffffffffff85163b610eae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016101c9565b5081610cfe565b610cfe8383815115610eca5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101c9919061129a565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b803560ff81168114610f3e57600080fd5b919050565b60006020808385031215610f5657600080fd5b823567ffffffffffffffff80821115610f6e57600080fd5b818501915085601f830112610f8257600080fd5b813581811115610f9457610f94610efe565b8060051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f83011681018181108582111715610fd757610fd7610efe565b604052918252848201925083810185019188831115610ff557600080fd5b938501935b8285101561101a5761100b85610f2d565b84529385019392850192610ffa565b98975050505050505050565b60006040828403121561021657600080fd5b6000806060838503121561104b57600080fd5b6110558484611026565b946040939093013593505050565b6000806060838503121561107657600080fd5b823567ffffffffffffffff81111561108d57600080fd5b830160e0818603121561109f57600080fd5b91506110ae8460208501611026565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611146576111466110e6565b5060010190565b60006020828403121561115f57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461118357600080fd5b9392505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126111bf57600080fd5b83018035915067ffffffffffffffff8211156111da57600080fd5b6020019150368190038213156111ef57600080fd5b9250929050565b8183823760009101908152919050565b60006020828403121561121857600080fd5b5051919050565b81810381811115611232576112326110e6565b92915050565b60006020828403121561124a57600080fd5b8151801515811461118357600080fd5b60005b8381101561127557818101518382015260200161125d565b50506000910152565b6000825161129081846020870161125a565b9190910192915050565b60208152600082518060208401526112b981604085016020870161125a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea264697066735822122011c715e81b3e4d0f81c1a034de4c747c42587e37de8eae9147914017273eb57f64736f6c63430008110033";

type GasZipPeripheryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GasZipPeripheryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GasZipPeriphery__factory extends ContractFactory {
  constructor(...args: GasZipPeripheryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _gasZipRouter: PromiseOrValue<string>,
    _liFiDEXAggregator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GasZipPeriphery> {
    return super.deploy(
      _gasZipRouter,
      _liFiDEXAggregator,
      overrides || {}
    ) as Promise<GasZipPeriphery>;
  }
  override getDeployTransaction(
    _gasZipRouter: PromiseOrValue<string>,
    _liFiDEXAggregator: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _gasZipRouter,
      _liFiDEXAggregator,
      overrides || {}
    );
  }
  override attach(address: string): GasZipPeriphery {
    return super.attach(address) as GasZipPeriphery;
  }
  override connect(signer: Signer): GasZipPeriphery__factory {
    return super.connect(signer) as GasZipPeriphery__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GasZipPeripheryInterface {
    return new utils.Interface(_abi) as GasZipPeripheryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GasZipPeriphery {
    return new Contract(address, _abi, signerOrProvider) as GasZipPeriphery;
  }
}