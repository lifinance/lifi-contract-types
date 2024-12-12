/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Executor, ExecutorInterface } from "../Executor";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_erc20Proxy",
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
    name: "erc20Proxy",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IERC20Proxy",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "onERC1155BatchReceived",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
      {
        name: "",
        type: "address",
        internalType: "address",
      },
      {
        name: "",
        type: "uint256[]",
        internalType: "uint256[]",
      },
      {
        name: "",
        type: "uint256[]",
        internalType: "uint256[]",
      },
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes4",
        internalType: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "onERC1155Received",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
      {
        name: "",
        type: "address",
        internalType: "address",
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes4",
        internalType: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "onERC721Received",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
      {
        name: "",
        type: "address",
        internalType: "address",
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bytes4",
        internalType: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "supportsInterface",
    inputs: [
      {
        name: "interfaceId",
        type: "bytes4",
        internalType: "bytes4",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "swapAndCompleteBridgeTokens",
    inputs: [
      {
        name: "_transactionId",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_swapData",
        type: "tuple[]",
        internalType: "struct LibSwap.SwapData[]",
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
        name: "_transferredAssetId",
        type: "address",
        internalType: "address",
      },
      {
        name: "_receiver",
        type: "address",
        internalType: "address payable",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "swapAndExecute",
    inputs: [
      {
        name: "_transactionId",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "_swapData",
        type: "tuple[]",
        internalType: "struct LibSwap.SwapData[]",
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
        name: "_transferredAssetId",
        type: "address",
        internalType: "address",
      },
      {
        name: "_receiver",
        type: "address",
        internalType: "address payable",
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
    type: "event",
    name: "ERC20ProxySet",
    inputs: [
      {
        name: "proxy",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
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
    name: "InvalidContract",
    inputs: [],
  },
  {
    type: "error",
    name: "NativeAssetTransferFailed",
    inputs: [],
  },
  {
    type: "error",
    name: "NoSwapFromZeroBalance",
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
  {
    type: "error",
    name: "UnAuthorized",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405162002343380380620023438339810160408190526100319161007c565b600080546001600160a01b0319166001600160a01b038316908117825560405190917f2c835b8316da89c3b658f57c3b39e7b191fddc4b104beeda23042d5dadf455a991a2506100ac565b60006020828403121561008e57600080fd5b81516001600160a01b03811681146100a557600080fd5b9392505050565b61228780620000bc6000396000f3fe6080604052600436106100745760003560e01c80637f555b031161004e5780637f555b031461011b578063a83cbaa31461016d578063bc197c8114610180578063f23a6e61146101c557600080fd5b806301ffc9a714610080578063150b7a02146100b55780634f91bc2b1461010657600080fd5b3661007b57005b600080fd5b34801561008c57600080fd5b506100a061009b366004611ba8565b61020a565b60405190151581526020015b60405180910390f35b3480156100c157600080fd5b506100d56100d0366004611d22565b6102a3565b6040517fffffffff0000000000000000000000000000000000000000000000000000000090911681526020016100ac565b610119610114366004611dda565b6102cd565b005b34801561012757600080fd5b506000546101489073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100ac565b61011961017b366004611e4e565b61036e565b34801561018c57600080fd5b506100d561019b366004611f3f565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b3480156101d157600080fd5b506100d56101e0366004611fed565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000148061029d57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b7f150b7a02000000000000000000000000000000000000000000000000000000005b949350505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610348576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018160000181905550610363868686868660006001610409565b600090555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103e9576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556103fd8787878787876000610409565b60009055505050505050565b60008080888861041a600182612056565b81811061042957610429612090565b905060200281019061043b91906120bf565b61044c9060808101906060016120fd565b905073ffffffffffffffffffffffffffffffffffffffff81161561047a57610473816106e2565b9150610491565b34610484826106e2565b61048e9190612056565b91505b73ffffffffffffffffffffffffffffffffffffffff871615610604576104b6876106e2565b92508315610567576040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815233600482015230602482015260009073ffffffffffffffffffffffffffffffffffffffff89169063dd62ed3e90604401602060405180830381865afa158015610531573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610555919061211a565b9050610561888261079a565b5061061b565b6000546040517f15dacbea00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff898116600483015233602483015230604483015260648201889052909116906315dacbea90608401600060405180830381600087803b1580156105e757600080fd5b505af11580156105fb573d6000803e3d6000fd5b5050505061061b565b3461060e886106e2565b6106189190612056565b92505b6106278a8a8a8961091a565b6000610632886106e2565b90508381111561065057610650888861064b8785612056565b610c2c565b600061065b836106e2565b90508381111561067457610674838961064b8785612056565b6040805173ffffffffffffffffffffffffffffffffffffffff808c1682528a1660208201529081018290524260608201528c907fb8c86983f929c6b770461983d1bbde1870408120f07123e9c12d49f35a0b4c4b9060800160405180910390a2505050505050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff821615610793576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561076a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061078e919061211a565b61029d565b4792915050565b806000036107d4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661082d5780341015610829576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561089a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108be919061211a565b905081811015610909576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61091583333085610c5d565b505050565b8282828160018114610b415760006109328585610e77565b905060008585610943600186612056565b81811061095257610952612090565b905060200281019061096491906120bf565b6109759060808101906060016120fd565b9050600088815b81811015610a565760005473ffffffffffffffffffffffffffffffffffffffff168c8c838181106109af576109af612090565b90506020028101906109c191906120bf565b6109cf9060208101906120fd565b73ffffffffffffffffffffffffffffffffffffffff1603610a1c576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b368c8c83818110610a2f57610a2f612090565b9050602002810190610a4191906120bf565b9050610a4d8e82610f83565b5060010161097c565b505060005b610a66600186612056565b811015610b38576000888883818110610a8157610a81612090565b9050602002810190610a9391906120bf565b610aa49060808101906060016120fd565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610b2f57610ae2816106e2565b9250848281518110610af657610af6612090565b6020026020010151831115610b2f57610b2f8188878581518110610b1c57610b1c612090565b60200260200101518661064b9190612056565b50600101610a5b565b50505050610c22565b8560005b81811015610c1f5760005473ffffffffffffffffffffffffffffffffffffffff16898983818110610b7857610b78612090565b9050602002810190610b8a91906120bf565b610b989060208101906120fd565b73ffffffffffffffffffffffffffffffffffffffff1603610be5576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b36898983818110610bf857610bf8612090565b9050602002810190610c0a91906120bf565b9050610c168b82610f83565b50600101610b45565b50505b5050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831615610c535761091583838361127b565b61091582826113fd565b73ffffffffffffffffffffffffffffffffffffffff8416610caa576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610cf7576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610d68573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d8c919061211a565b9050610d9a82868686611527565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610e0a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e2e919061211a565b610e389190612056565b14610e6f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b60608160008167ffffffffffffffff811115610e9557610e95611c16565b604051908082528060200260200182016040528015610ebe578160200160208202803683370190505b5090506000805b83811015610f7857868682818110610edf57610edf612090565b9050602002810190610ef191906120bf565b610f029060808101906060016120fd565b9150610f0d826106e2565b838281518110610f1f57610f1f612090565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610f705734838281518110610f5857610f58612090565b60200260200101818151610f6c9190612056565b9052505b600101610ec5565b509095945050505050565b610f99610f9360208301836120fd565b3b151590565b610fcf576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361100f576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061103e61102460608501604086016120fd565b73ffffffffffffffffffffffffffffffffffffffff161590565b61104957600061104f565b82608001355b9050600061106b61106660608601604087016120fd565b6106e2565b9050600061108261106660808701606088016120fd565b9050826000036110b9576110b961109f60608701604088016120fd565b6110af60408801602089016120fd565b8760800135611603565b8460800135821015611104576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610900565b60008061111460208801886120fd565b73ffffffffffffffffffffffffffffffffffffffff168561113860a08a018a612133565b604051611146929190612198565b60006040518083038185875af1925050503d8060008114611183576040519150601f19603f3d011682016040523d82523d6000602084013e611188565b606091505b50915091508161119b5761119b81611746565b60006111b061106660808a0160608b016120fd565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896111e160208b018b6120fd565b6111f160608c0160408d016120fd565b61120160808d0160608e016120fd565b8c60800135898711611213578661121d565b61121d8a88612056565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166112c8576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611315576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611382573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113a6919061211a565b9050808211156113ec576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610900565b6113f7848484611750565b50505050565b73ffffffffffffffffffffffffffffffffffffffff821661144a576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561148d576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610900565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146114e7576040519150601f19603f3d011682016040523d82523d6000602084013e6114ec565b606091505b5050905080610915576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526113f79085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526117a6565b73ffffffffffffffffffffffffffffffffffffffff831661162357505050565b73ffffffffffffffffffffffffffffffffffffffff8216611670576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156116e5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611709919061211a565b10156109155761171b838360006118b5565b61091583837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6118b5565b8051602082018181fd5b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526109159084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611581565b6000611808826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611a379092919063ffffffff16565b905080516000148061182957508080602001905181019061182991906121a8565b610915576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610900565b80158061195557506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa15801561192f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611953919061211a565b155b6119e1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610900565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526109159084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611581565b60606102c58484600085856000808673ffffffffffffffffffffffffffffffffffffffff168587604051611a6b91906121ee565b60006040518083038185875af1925050503d8060008114611aa8576040519150601f19603f3d011682016040523d82523d6000602084013e611aad565b606091505b5091509150611abe87838387611ac9565b979650505050505050565b60608315611b5f578251600003611b585773ffffffffffffffffffffffffffffffffffffffff85163b611b58576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610900565b50816102c5565b6102c58383815115611b745781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109009190612200565b600060208284031215611bba57600080fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114611bea57600080fd5b9392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611c1357600080fd5b50565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611c8c57611c8c611c16565b604052919050565b600082601f830112611ca557600080fd5b813567ffffffffffffffff811115611cbf57611cbf611c16565b611cf060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611c45565b818152846020838601011115611d0557600080fd5b816020850160208301376000918101602001919091529392505050565b60008060008060808587031215611d3857600080fd5b8435611d4381611bf1565b93506020850135611d5381611bf1565b925060408501359150606085013567ffffffffffffffff811115611d7657600080fd5b611d8287828801611c94565b91505092959194509250565b60008083601f840112611da057600080fd5b50813567ffffffffffffffff811115611db857600080fd5b6020830191508360208260051b8501011115611dd357600080fd5b9250929050565b600080600080600060808688031215611df257600080fd5b85359450602086013567ffffffffffffffff811115611e1057600080fd5b611e1c88828901611d8e565b9095509350506040860135611e3081611bf1565b91506060860135611e4081611bf1565b809150509295509295909350565b60008060008060008060a08789031215611e6757600080fd5b86359550602087013567ffffffffffffffff811115611e8557600080fd5b611e9189828a01611d8e565b9096509450506040870135611ea581611bf1565b92506060870135611eb581611bf1565b80925050608087013590509295509295509295565b600082601f830112611edb57600080fd5b8135602067ffffffffffffffff821115611ef757611ef7611c16565b8160051b611f06828201611c45565b9283528481018201928281019087851115611f2057600080fd5b83870192505b84831015611abe57823582529183019190830190611f26565b600080600080600060a08688031215611f5757600080fd5b8535611f6281611bf1565b94506020860135611f7281611bf1565b9350604086013567ffffffffffffffff80821115611f8f57600080fd5b611f9b89838a01611eca565b94506060880135915080821115611fb157600080fd5b611fbd89838a01611eca565b93506080880135915080821115611fd357600080fd5b50611fe088828901611c94565b9150509295509295909350565b600080600080600060a0868803121561200557600080fd5b853561201081611bf1565b9450602086013561202081611bf1565b93506040860135925060608601359150608086013567ffffffffffffffff81111561204a57600080fd5b611fe088828901611c94565b8181038181111561029d577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126120f357600080fd5b9190910192915050565b60006020828403121561210f57600080fd5b8135611bea81611bf1565b60006020828403121561212c57600080fd5b5051919050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261216857600080fd5b83018035915067ffffffffffffffff82111561218357600080fd5b602001915036819003821315611dd357600080fd5b8183823760009101908152919050565b6000602082840312156121ba57600080fd5b81518015158114611bea57600080fd5b60005b838110156121e55781810151838201526020016121cd565b50506000910152565b600082516120f38184602087016121ca565b602081526000825180602084015261221f8160408501602087016121ca565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fea2646970667358221220ead3280fdd129db358de61b6da287637b8a7614987da2355ba2797f44c87e77364736f6c63430008110033";

type ExecutorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExecutorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Executor__factory extends ContractFactory {
  constructor(...args: ExecutorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _erc20Proxy: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Executor> {
    return super.deploy(_erc20Proxy, overrides || {}) as Promise<Executor>;
  }
  override getDeployTransaction(
    _erc20Proxy: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_erc20Proxy, overrides || {});
  }
  override attach(address: string): Executor {
    return super.attach(address) as Executor;
  }
  override connect(signer: Signer): Executor__factory {
    return super.connect(signer) as Executor__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExecutorInterface {
    return new utils.Interface(_abi) as ExecutorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Executor {
    return new Contract(address, _abi, signerOrProvider) as Executor;
  }
}
