/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { RelayFacet, RelayFacetInterface } from "../RelayFacet";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_relayReceiver",
        type: "address",
        internalType: "address",
      },
      {
        name: "_relaySolver",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "relayReceiver",
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
    type: "function",
    name: "relaySolver",
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
    type: "function",
    name: "startBridgeTokensViaRelay",
    inputs: [
      {
        name: "_bridgeData",
        type: "tuple",
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
      {
        name: "_relayData",
        type: "tuple",
        internalType: "struct RelayFacet.RelayData",
        components: [
          {
            name: "requestId",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "receivingAssetId",
            type: "address",
            internalType: "address",
          },
          {
            name: "signature",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "swapAndStartBridgeTokensViaRelay",
    inputs: [
      {
        name: "_bridgeData",
        type: "tuple",
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
        name: "_relayData",
        type: "tuple",
        internalType: "struct RelayFacet.RelayData",
        components: [
          {
            name: "requestId",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "receivingAssetId",
            type: "address",
            internalType: "address",
          },
          {
            name: "signature",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "payable",
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
    name: "CannotBridgeToSameNetwork",
    inputs: [],
  },
  {
    type: "error",
    name: "ContractCallNotAllowed",
    inputs: [],
  },
  {
    type: "error",
    name: "CumulativeSlippageTooHigh",
    inputs: [
      {
        name: "minAmount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "receivedAmount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "InformationMismatch",
    inputs: [],
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
    name: "InvalidQuote",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidReceiver",
    inputs: [],
  },
  {
    type: "error",
    name: "NativeAssetTransferFailed",
    inputs: [],
  },
  {
    type: "error",
    name: "NoSwapDataProvided",
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
] as const;

const _bytecode =
  "0x60c06040523480156200001157600080fd5b506040516200290738038062002907833981016040819052620000349162000069565b6001600160a01b039182166080521660a052620000a1565b80516001600160a01b03811681146200006457600080fd5b919050565b600080604083850312156200007d57600080fd5b62000088836200004c565b915062000098602084016200004c565b90509250929050565b60805160a051612834620000d360003960008181607e0152818161027a01526106000152600060db01526128346000f3fe60806040526004361061003f5760003560e01c8063520e603014610044578063702532721461005957806381d82dd81461006c578063981886a7146100c9575b600080fd5b610057610052366004612316565b6100fd565b005b6100576100673660046123d5565b6104b4565b34801561007857600080fd5b506100a07f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156100d557600080fd5b506100a07f000000000000000000000000000000000000000000000000000000000000000081565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610178576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155608085015160e086015160a0870151879285926000928435924692309273ffffffffffffffffffffffffffffffffffffffff92831692166101c36040890160208a01612442565b6040805160208101989098528701959095526060860193909352608085019190915260a084015260c083015273ffffffffffffffffffffffffffffffffffffffff1660e08201526101000160405160208183030381529060405280519060200120905060006102768284806040019061023c9190612464565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061084f92505050565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146102fd576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b33600061030a34476124d0565b90508a806101000151610349576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b80610120015115610387576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c6103aa8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103e1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361041f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361045c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104718e600001518f60c001518f8f336108f9565b60c08f01526104808e8c610a41565b5047915050818111156104a2576104a260008461049d85856124d0565b610a7d565b50506000909555505050505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161052f576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561053c8361250a565b608081015160e082015160a083015185926000928435924692309273ffffffffffffffffffffffffffffffffffffffff918216929091166105836040890160208a01612442565b6040805160208101989098528701959095526060860193909352608085019190915260a084015260c083015273ffffffffffffffffffffffffffffffffffffffff1660e08201526101000160405160208183030381529060405280519060200120905060006105fc8284806040019061023c9190612464565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610683576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b33600061069034476124d0565b905061069b8961250a565b60a081015173ffffffffffffffffffffffffffffffffffffffff166106ec576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361072a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610767576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107708a61250a565b806101000151156107ad576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107b68b61250a565b806101200151156107f3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61081061080660a08e0160808f01612442565b8d60c00135610ab3565b61082261081c8d61250a565b8c610a41565b50479150508181111561083f5761083f60008461049d85856124d0565b5050600090955550505050505050565b60405160019083600052602083015160405260408351036108a457604083015160ff81901c601b016020527f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff166060526108ca565b60418351036108c557606083015160001a60205260408301516060526108ca565b600091505b6020600160806000855afa5191503d6108eb57638baa579f6000526004601cfd5b600060605260405292915050565b600082808203610935576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856109446001856124d0565b81811061095357610953612516565b90506020028101906109659190612545565b610976906080810190606001612442565b9050600061098382610c29565b905073ffffffffffffffffffffffffffffffffffffffff82166109ad576109aa34826124d0565b90505b60006109b98888610ce2565b90506109c58888610dee565b6109d28a89898985610e5b565b6000826109de85610c29565b6109e891906124d0565b905089811015610a33576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b6040517fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f190610a719084906125f1565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff831615610aa957610aa483838361120d565b505050565b610aa4828261138f565b80600003610aed576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610b465780341015610b42576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610bb3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd79190612704565b905081811015610c1d576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610a2a565b610aa4833330856114b9565b600073ffffffffffffffffffffffffffffffffffffffff821615610cda576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610cb1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cd59190612704565b610cdc565b475b92915050565b60608160008167ffffffffffffffff811115610d0057610d006120d0565b604051908082528060200260200182016040528015610d29578160200160208202803683370190505b5090506000805b83811015610de357868682818110610d4a57610d4a612516565b9050602002810190610d5c9190612545565b610d6d906080810190606001612442565b9150610d7882610c29565b838281518110610d8a57610d8a612516565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610ddb5734838281518110610dc357610dc3612516565b60200260200101818151610dd791906124d0565b9052505b600101610d30565b509095945050505050565b60005b81811015610aa45736838383818110610e0c57610e0c612516565b9050602002810190610e1e9190612545565b9050610e3060e0820160c0830161271d565b15610e5257610e52610e486060830160408401612442565b8260800135610ab3565b50600101610df1565b8383838382600181146111285760008585610e776001856124d0565b818110610e8657610e86612516565b9050602002810190610e989190612545565b610ea9906080810190606001612442565b9050600089815b8181101561105457368d8d83818110610ecb57610ecb612516565b9050602002810190610edd9190612545565b9050610f0c610ef26060830160408401612442565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610f6f5750610f6f610f256040830160208401612442565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610f865750610f86610f256020830183612442565b801561100b575061100b610f9d60a0830183612464565b610fac9160049160009161273a565b610fb591612764565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611041576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61104b8f826116d3565b50600101610eb0565b505060005b6110646001856124d0565b81101561112057600088888381811061107f5761107f612516565b90506020028101906110919190612545565b6110a2906080810190606001612442565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611117578582815181106110e9576110e9612516565b60200260200101516110fa82610c29565b61110491906124d0565b9250821561111757611117818885610a7d565b50600101611059565b505050611201565b8760005b818110156111fe57368b8b8381811061114757611147612516565b90506020028101906111599190612545565b905061116e610ef26060830160408401612442565b806111875750611187610f256040830160208401612442565b801561119e575061119e610f256020830183612442565b80156111b557506111b5610f9d60a0830183612464565b6111eb576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111f58d826116d3565b5060010161112c565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661125a576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166112a7576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611314573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113389190612704565b90508082111561137e576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610a2a565b6113898484846119b1565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166113dc576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561141f576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610a2a565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611479576040519150601f19603f3d011682016040523d82523d6000602084013e61147e565b606091505b5050905080610aa4576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611506576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611553576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156115c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115e89190612704565b90506115f682868686611a85565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611666573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061168a9190612704565b61169491906124d0565b146116cb576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6116e96116e36020830183612442565b3b151590565b61171f576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361175f576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611774610ef26060850160408601612442565b61177f576000611785565b82608001355b905060006117a161179c6060860160408701612442565b610c29565b905060006117b861179c6080870160608801612442565b9050826000036117ef576117ef6117d56060870160408801612442565b6117e56040880160208901612442565b8760800135611ae3565b846080013582101561183a576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610a2a565b60008061184a6020880188612442565b73ffffffffffffffffffffffffffffffffffffffff168561186e60a08a018a612464565b60405161187c9291906127ac565b60006040518083038185875af1925050503d80600081146118b9576040519150601f19603f3d011682016040523d82523d6000602084013e6118be565b606091505b5091509150816118d1576118d181611c26565b60006118e661179c60808a0160608b01612442565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961191760208b018b612442565b61192760608c0160408d01612442565b61193760808d0160608e01612442565b8c608001358987116119495786611953565b6119538a886124d0565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610aa49084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611c30565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526113899085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611a03565b73ffffffffffffffffffffffffffffffffffffffff8316611b0357505050565b73ffffffffffffffffffffffffffffffffffffffff8216611b50576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611bc5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611be99190612704565b1015610aa457611bfb83836000611d3f565b610aa483837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611d3f565b8051602082018181fd5b6000611c92826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611ec19092919063ffffffff16565b9050805160001480611cb3575080806020019051810190611cb391906127bc565b610aa4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610a2a565b801580611ddf57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611db9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ddd9190612704565b155b611e6b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610a2a565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610aa49084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611a03565b6060611ed08484600085611ed8565b949350505050565b606082471015611f6a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610a2a565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611f9391906127d9565b60006040518083038185875af1925050503d8060008114611fd0576040519150601f19603f3d011682016040523d82523d6000602084013e611fd5565b606091505b5091509150611fe687838387611ff1565b979650505050505050565b606083156120875782516000036120805773ffffffffffffffffffffffffffffffffffffffff85163b612080576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610a2a565b5081611ed0565b611ed0838381511561209c5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2a91906127eb565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715612123576121236120d0565b60405290565b600082601f83011261213a57600080fd5b813567ffffffffffffffff80821115612155576121556120d0565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561219b5761219b6120d0565b816040528381528660208588010111156121b457600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff811681146121f857600080fd5b919050565b801515811461220b57600080fd5b50565b80356121f8816121fd565b6000610140828403121561222c57600080fd5b6122346120ff565b905081358152602082013567ffffffffffffffff8082111561225557600080fd5b61226185838601612129565b6020840152604084013591508082111561227a57600080fd5b5061228784828501612129565b604083015250612299606083016121d4565b60608201526122aa608083016121d4565b60808201526122bb60a083016121d4565b60a082015260c082013560c082015260e082013560e08201526101006122e281840161220e565b908201526101206122f483820161220e565b9082015292915050565b60006060828403121561231057600080fd5b50919050565b6000806000806060858703121561232c57600080fd5b843567ffffffffffffffff8082111561234457600080fd5b61235088838901612219565b9550602087013591508082111561236657600080fd5b818701915087601f83011261237a57600080fd5b81358181111561238957600080fd5b8860208260051b850101111561239e57600080fd5b6020830195508094505060408701359150808211156123bc57600080fd5b506123c9878288016122fe565b91505092959194509250565b600080604083850312156123e857600080fd5b823567ffffffffffffffff8082111561240057600080fd5b90840190610140828703121561241557600080fd5b9092506020840135908082111561242b57600080fd5b50612438858286016122fe565b9150509250929050565b60006020828403121561245457600080fd5b61245d826121d4565b9392505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261249957600080fd5b83018035915067ffffffffffffffff8211156124b457600080fd5b6020019150368190038213156124c957600080fd5b9250929050565b81810381811115610cdc577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610cdc3683612219565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261257957600080fd5b9190910192915050565b60005b8381101561259e578181015183820152602001612586565b50506000910152565b600081518084526125bf816020860160208601612583565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261261a6101608501836125a7565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261265583826125a7565b925050606085015161267f608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206126f28187018315159052565b90950151151593019290925250919050565b60006020828403121561271657600080fd5b5051919050565b60006020828403121561272f57600080fd5b813561245d816121fd565b6000808585111561274a57600080fd5b8386111561275757600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156127a45780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6000602082840312156127ce57600080fd5b815161245d816121fd565b60008251612579818460208701612583565b60208152600061245d60208301846125a756fea2646970667358221220ec681de87c44ea6f6d8a29846771e1e2ae6ed03085be5a13788c7dacd4c14e2564736f6c63430008110033";

type RelayFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RelayFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RelayFacet__factory extends ContractFactory {
  constructor(...args: RelayFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _relayReceiver: PromiseOrValue<string>,
    _relaySolver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RelayFacet> {
    return super.deploy(
      _relayReceiver,
      _relaySolver,
      overrides || {}
    ) as Promise<RelayFacet>;
  }
  override getDeployTransaction(
    _relayReceiver: PromiseOrValue<string>,
    _relaySolver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _relayReceiver,
      _relaySolver,
      overrides || {}
    );
  }
  override attach(address: string): RelayFacet {
    return super.attach(address) as RelayFacet;
  }
  override connect(signer: Signer): RelayFacet__factory {
    return super.connect(signer) as RelayFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RelayFacetInterface {
    return new utils.Interface(_abi) as RelayFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RelayFacet {
    return new Contract(address, _abi, signerOrProvider) as RelayFacet;
  }
}
