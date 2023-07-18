/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  RoninBridgeFacet,
  RoninBridgeFacetInterface,
} from "../RoninBridgeFacet";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IRoninBridgeGateway",
        name: "_gateway",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "CannotBridgeToSameNetwork",
    type: "error",
  },
  {
    inputs: [],
    name: "ContractCallNotAllowed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "minAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "receivedAmount",
        type: "uint256",
      },
    ],
    name: "CumulativeSlippageTooHigh",
    type: "error",
  },
  {
    inputs: [],
    name: "InformationMismatch",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "required",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    name: "InsufficientBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidContract",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidReceiver",
    type: "error",
  },
  {
    inputs: [],
    name: "NativeAssetTransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "NoSwapDataProvided",
    type: "error",
  },
  {
    inputs: [],
    name: "NoSwapFromZeroBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "NoTransferToNullAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "NullAddrIsNotAValidSpender",
    type: "error",
  },
  {
    inputs: [],
    name: "NullAddrIsNotAnERC20Token",
    type: "error",
  },
  {
    inputs: [],
    name: "ReentrancyError",
    type: "error",
  },
  {
    inputs: [],
    name: "SliceOutOfBounds",
    type: "error",
  },
  {
    inputs: [],
    name: "SliceOverflow",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "transactionId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "integrator",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "referrer",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "fromAssetId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "toAssetId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fromAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "toAmount",
        type: "uint256",
      },
    ],
    name: "LiFiGenericSwapCompleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "transactionId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "integrator",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "referrer",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "fromAssetId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "toAssetId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fromAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "toAmount",
        type: "uint256",
      },
    ],
    name: "LiFiSwappedGeneric",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "transactionId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receivingAssetId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "LiFiTransferCompleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "transactionId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receivingAssetId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "LiFiTransferRecovered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "transactionId",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "bridge",
            type: "string",
          },
          {
            internalType: "string",
            name: "integrator",
            type: "string",
          },
          {
            internalType: "address",
            name: "referrer",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "minAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "destinationChainId",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "hasSourceSwaps",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "hasDestinationCall",
            type: "bool",
          },
        ],
        indexed: false,
        internalType: "struct ILiFi.BridgeData",
        name: "bridgeData",
        type: "tuple",
      },
    ],
    name: "LiFiTransferStarted",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "transactionId",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "bridge",
            type: "string",
          },
          {
            internalType: "string",
            name: "integrator",
            type: "string",
          },
          {
            internalType: "address",
            name: "referrer",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "minAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "destinationChainId",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "hasSourceSwaps",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "hasDestinationCall",
            type: "bool",
          },
        ],
        internalType: "struct ILiFi.BridgeData",
        name: "_bridgeData",
        type: "tuple",
      },
    ],
    name: "startBridgeTokensViaRoninBridge",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "transactionId",
            type: "bytes32",
          },
          {
            internalType: "string",
            name: "bridge",
            type: "string",
          },
          {
            internalType: "string",
            name: "integrator",
            type: "string",
          },
          {
            internalType: "address",
            name: "referrer",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "receiver",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "minAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "destinationChainId",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "hasSourceSwaps",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "hasDestinationCall",
            type: "bool",
          },
        ],
        internalType: "struct ILiFi.BridgeData",
        name: "_bridgeData",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "address",
            name: "callTo",
            type: "address",
          },
          {
            internalType: "address",
            name: "approveTo",
            type: "address",
          },
          {
            internalType: "address",
            name: "sendingAssetId",
            type: "address",
          },
          {
            internalType: "address",
            name: "receivingAssetId",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "fromAmount",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "bool",
            name: "requiresDeposit",
            type: "bool",
          },
        ],
        internalType: "struct LibSwap.SwapData[]",
        name: "_swapData",
        type: "tuple[]",
      },
    ],
    name: "swapAndStartBridgeTokensViaRoninBridge",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b50604051620028de380380620028de833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516128436200009b600039600081816106ea015261075001526128436000f3fe6080604052600436106100295760003560e01c80636502c79a1461002e578063c7c8b35514610043575b600080fd5b61004161003c366004612244565b610056565b005b610041610051366004612279565b61027d565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447612342565b90508380610100015115610122576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610120015115610160576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101838160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101ba576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610235576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024787608001518860c001516104a8565b61025087610628565b5047915050818111156102725761027260008461026d8585612342565b6107f5565b505060009091555050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102f8576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103093447612342565b905085806101000151610348576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610386576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103a98160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103e0576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361041e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361045b576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047089600001518a60c001518a8a33610826565b60c08a015261047e89610628565b50479150508181111561049b5761049b60008461026d8585612342565b5050600090915550505050565b806000036104e2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661053b5780341015610537576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156105a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105cc9190612355565b905081811015610617576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61062383333085610969565b505050565b600060405180606001604052808360a0015173ffffffffffffffffffffffffffffffffffffffff168152602001836080015173ffffffffffffffffffffffffffffffffffffffff1681526020016040518060600160405280600060018111156106935761069361236e565b8152602001600081526020018560c00151815250815250905060006106d0836080015173ffffffffffffffffffffffffffffffffffffffff161590565b156106e0575060c0820151610713565b61071383608001517f00000000000000000000000000000000000000000000000000000000000000008560c00151610b83565b6040517f4b14557e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690634b14557e90839061078790869060040161239d565b6000604051808303818588803b1580156107a057600080fd5b505af11580156107b4573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1836040516107e8919061249b565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff83161561081c57610623838383610cc6565b6106238282610e48565b600082808203610862576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610871600185612342565b818110610880576108806125ae565b905060200281019061089291906125dd565b6108a390608081019060600161261b565b905060006108b082610f72565b905073ffffffffffffffffffffffffffffffffffffffff82166108da576108d73482612342565b90505b60006108e6888861102b565b90506108f28888611137565b6108ff8a898989856111a4565b60008261090b85610f72565b6109159190612342565b90508981101561095b576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440161060e565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84166109b6576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a03576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610a74573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a989190612355565b9050610aa682868686611556565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610b16573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b3a9190612355565b610b449190612342565b14610b7b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610ba357505050565b73ffffffffffffffffffffffffffffffffffffffff8216610bf0576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610c65573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c899190612355565b101561062357610c9b83836000611632565b61062383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611632565b73ffffffffffffffffffffffffffffffffffffffff8316610d13576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d60576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610dcd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610df19190612355565b905080821115610e37576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161060e565b610e428484846117b4565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610e95576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610ed8576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161060e565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610f32576040519150601f19603f3d011682016040523d82523d6000602084013e610f37565b606091505b5050905080610623576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615611023576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610ffa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061101e9190612355565b611025565b475b92915050565b60608160008167ffffffffffffffff81111561104957611049611fd6565b604051908082528060200260200182016040528015611072578160200160208202803683370190505b5090506000805b8381101561112c57868682818110611093576110936125ae565b90506020028101906110a591906125dd565b6110b690608081019060600161261b565b91506110c182610f72565b8382815181106110d3576110d36125ae565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611124573483828151811061110c5761110c6125ae565b602002602001018181516111209190612342565b9052505b600101611079565b509095945050505050565b60005b818110156106235736838383818110611155576111556125ae565b905060200281019061116791906125dd565b905061117960e0820160c08301612636565b1561119b5761119b611191606083016040840161261b565b82608001356104a8565b5060010161113a565b83838383826001811461147157600085856111c0600185612342565b8181106111cf576111cf6125ae565b90506020028101906111e191906125dd565b6111f290608081019060600161261b565b9050600089815b8181101561139d57368d8d83818110611214576112146125ae565b905060200281019061122691906125dd565b905061125561123b606083016040840161261b565b73ffffffffffffffffffffffffffffffffffffffff161590565b806112b857506112b861126e604083016020840161261b565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156112cf57506112cf61126e602083018361261b565b801561135457506113546112e660a0830183612653565b6112f5916004916000916126bf565b6112fe916126e9565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61138a576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113948f8261180a565b506001016111f9565b505060005b6113ad600185612342565b8110156114695760008888838181106113c8576113c86125ae565b90506020028101906113da91906125dd565b6113eb90608081019060600161261b565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461146057858281518110611432576114326125ae565b602002602001015161144382610f72565b61144d9190612342565b92508215611460576114608188856107f5565b506001016113a2565b50505061154a565b8760005b8181101561154757368b8b83818110611490576114906125ae565b90506020028101906114a291906125dd565b90506114b761123b606083016040840161261b565b806114d057506114d061126e604083016020840161261b565b80156114e757506114e761126e602083018361261b565b80156114fe57506114fe6112e660a0830183612653565b611534576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61153e8d8261180a565b50600101611475565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610e429085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611b20565b8015806116d257506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156116ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116d09190612355565b155b61175e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161060e565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106239084907f095ea7b300000000000000000000000000000000000000000000000000000000906064016115b0565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106239084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016115b0565b61182061181a602083018361261b565b3b151590565b611856576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611896576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006118ab61123b606085016040860161261b565b6118b65760006118bc565b82608001355b905060006118d86118d3606086016040870161261b565b610f72565b905060006118ef6118d3608087016060880161261b565b9050826000036119265761192661190c606087016040880161261b565b61191c604088016020890161261b565b8760800135610b83565b8460800135821015611971576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161060e565b600080611981602088018861261b565b73ffffffffffffffffffffffffffffffffffffffff16856119a560a08a018a612653565b6040516119b3929190612731565b60006040518083038185875af1925050503d80600081146119f0576040519150601f19603f3d011682016040523d82523d6000602084013e6119f5565b606091505b509150915081611a40576000611a0a82611c2f565b9050806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060e9190612741565b6000611a556118d360808a0160608b0161261b565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611a8660208b018b61261b565b611a9660608c0160408d0161261b565b611aa660808d0160608e0161261b565b8c60800135898711611ab85786611ac2565b611ac28a88612342565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611b82826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611cad9092919063ffffffff16565b9050805160001480611ba3575080806020019051810190611ba39190612754565b610623576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161060e565b6060604482511015611c7457505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611c906004808551611c889190612342565b859190611cc4565b905080806020019051810190611ca69190612771565b9392505050565b6060611cbc8484600085611dde565b949350505050565b606081611cd281601f6127e8565b1015611d0a576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611d1482846127e8565b84511015611d4e576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611d6d5760405191506000825260208201604052611dd5565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611da6578051835260209283019201611d8e565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b606082471015611e70576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161060e565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611e9991906127fb565b60006040518083038185875af1925050503d8060008114611ed6576040519150601f19603f3d011682016040523d82523d6000602084013e611edb565b606091505b5091509150611eec87838387611ef7565b979650505050505050565b60608315611f8d578251600003611f865773ffffffffffffffffffffffffffffffffffffffff85163b611f86576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161060e565b5081611cbc565b611cbc8383815115611fa25781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060e9190612741565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561202957612029611fd6565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561207657612076611fd6565b604052919050565b600067ffffffffffffffff82111561209857612098611fd6565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126120d557600080fd5b81356120e86120e38261207e565b61202f565b8181528460208386010111156120fd57600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461213e57600080fd5b919050565b801515811461215157600080fd5b50565b803561213e81612143565b6000610140828403121561217257600080fd5b61217a612005565b905081358152602082013567ffffffffffffffff8082111561219b57600080fd5b6121a7858386016120c4565b602084015260408401359150808211156121c057600080fd5b506121cd848285016120c4565b6040830152506121df6060830161211a565b60608201526121f06080830161211a565b608082015261220160a0830161211a565b60a082015260c082013560c082015260e082013560e0820152610100612228818401612154565b9082015261012061223a838201612154565b9082015292915050565b60006020828403121561225657600080fd5b813567ffffffffffffffff81111561226d57600080fd5b611cbc8482850161215f565b60008060006040848603121561228e57600080fd5b833567ffffffffffffffff808211156122a657600080fd5b6122b28783880161215f565b945060208601359150808211156122c857600080fd5b818601915086601f8301126122dc57600080fd5b8135818111156122eb57600080fd5b8760208260051b850101111561230057600080fd5b6020830194508093505050509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561102557611025612313565b60006020828403121561236757600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600060a08201905073ffffffffffffffffffffffffffffffffffffffff80845116835280602085015116602084015250604083015180516002811061240b577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8060408501525060208101516060840152604081015160808401525092915050565b60005b83811015612448578181015183820152602001612430565b50506000910152565b6000815180845261246981602086016020860161242d565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526124c4610160850183612451565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526124ff8382612451565b9250506060850151612529608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061259c8187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261261157600080fd5b9190910192915050565b60006020828403121561262d57600080fd5b611ca68261211a565b60006020828403121561264857600080fd5b8135611ca681612143565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261268857600080fd5b83018035915067ffffffffffffffff8211156126a357600080fd5b6020019150368190038213156126b857600080fd5b9250929050565b600080858511156126cf57600080fd5b838611156126dc57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156127295780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611ca66020830184612451565b60006020828403121561276657600080fd5b8151611ca681612143565b60006020828403121561278357600080fd5b815167ffffffffffffffff81111561279a57600080fd5b8201601f810184136127ab57600080fd5b80516127b96120e38261207e565b8181528560208385010111156127ce57600080fd5b6127df82602083016020860161242d565b95945050505050565b8082018082111561102557611025612313565b6000825161261181846020870161242d56fea2646970667358221220a3e1acdb0b44e0a5dcef105bfa27592e0a244e8388ff3c6f8fcc38dc555bc67264736f6c63430008110033";

type RoninBridgeFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RoninBridgeFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RoninBridgeFacet__factory extends ContractFactory {
  constructor(...args: RoninBridgeFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _gateway: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RoninBridgeFacet> {
    return super.deploy(_gateway, overrides || {}) as Promise<RoninBridgeFacet>;
  }
  override getDeployTransaction(
    _gateway: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_gateway, overrides || {});
  }
  override attach(address: string): RoninBridgeFacet {
    return super.attach(address) as RoninBridgeFacet;
  }
  override connect(signer: Signer): RoninBridgeFacet__factory {
    return super.connect(signer) as RoninBridgeFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RoninBridgeFacetInterface {
    return new utils.Interface(_abi) as RoninBridgeFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RoninBridgeFacet {
    return new Contract(address, _abi, signerOrProvider) as RoninBridgeFacet;
  }
}
