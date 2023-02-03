/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  TestAmarokFacet,
  TestAmarokFacetInterface,
} from "../../AmarokFacet.t.sol/TestAmarokFacet";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IConnextHandler",
        name: "_connextHandler",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_srcChainDomain",
        type: "uint32",
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
    name: "NativeAssetNotSupported",
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
    name: "OnlyContractOwner",
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
    inputs: [
      {
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
    ],
    name: "UnknownAmarokDomain",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
    ],
    name: "AmarokDomainSet",
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
        internalType: "address",
        name: "_dex",
        type: "address",
      },
    ],
    name: "addDex",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_chainId",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
    ],
    name: "setAmarokDomain",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_signature",
        type: "bytes4",
      },
    ],
    name: "setFunctionApprovalBySignature",
    outputs: [],
    stateMutability: "nonpayable",
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
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "address",
            name: "callTo",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "relayerFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "slippageTol",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "delegate",
            type: "address",
          },
        ],
        internalType: "struct AmarokFacet.AmarokData",
        name: "_amarokData",
        type: "tuple",
      },
    ],
    name: "startBridgeTokensViaAmarok",
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
      {
        components: [
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "address",
            name: "callTo",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "relayerFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "slippageTol",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "delegate",
            type: "address",
          },
        ],
        internalType: "struct AmarokFacet.AmarokData",
        name: "_amarokData",
        type: "tuple",
      },
    ],
    name: "swapAndStartBridgeTokensViaAmarok",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b5060405162002ed938038062002ed9833981016040819052620000349162000051565b6001600160a01b0390911660805263ffffffff1660a052620000a3565b600080604083850312156200006557600080fd5b82516001600160a01b03811681146200007d57600080fd5b602084015190925063ffffffff811681146200009857600080fd5b809150509250929050565b60805160a051612e0c620000cd6000396000505060008181610a5c0152610aaf0152612e0c6000f3fe60806040526004361061005a5760003560e01c806364a74ee21161004357806364a74ee2146100a1578063c561c148146100b4578063ef27dc6f146100d457600080fd5b8063280c6deb1461005f578063536db26614610081575b600080fd5b34801561006b57600080fd5b5061007f61007a366004612401565b6100e7565b005b34801561008d57600080fd5b5061007f61009c366004612463565b610182565b61007f6100af3660046126fb565b61018e565b3480156100c057600080fd5b5061007f6100cf3660046127ba565b610439565b61007f6100e23660046127fc565b6104b7565b6100ef610780565b60007feb4198458a814793befc1a2917bf545aff2a1c03cd5d74bd029e61245d484aaf60008481526020829052604080822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001663ffffffff871690811790915590519293509185917ff7d9e84ed3fcc363e379b957a2727eab9d6cb676f99533cbe3b68dadc0153dd991a3505050565b61018b816107f5565b50565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610209576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061021a3447612898565b905086806101000151610259576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8761027c8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156102b3576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036102f1576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361032e576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b88610351816080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610388576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8961012001511515610399886108e2565b1515146103d2576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103e78a600001518b60c001518b8b336108f9565b60c08b01526103f68a88610a41565b504791506000905082821161040c576000610416565b6104168383612898565b9050801561042a5761042a60008583610bc0565b50506000909255505050505050565b61018b817fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610532576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006105433447612898565b905061054e856128ab565b8061010001511561058b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610594866128ab565b60a081015173ffffffffffffffffffffffffffffffffffffffff166105e5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610623576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610660576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610669876128ab565b608081015173ffffffffffffffffffffffffffffffffffffffff166106ba576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106cc61014089016101208a016128b7565b15156106d7886108e2565b151514610710576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61072d61072360a08a0160808b01612463565b8960c00135610bf6565b61073f610739896128ab565b88610a41565b504791506000905082821161075557600061075f565b61075f8383612898565b905080156107735761077360008583610bc0565b5050600090925550505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff1633146107f3576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b6107fe81610d6c565b73ffffffffffffffffffffffffffffffffffffffff811660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602081905260409091205460ff1615610852575050565b73ffffffffffffffffffffffffffffffffffffffff909116600081815260208381526040822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660019081179091556002909401805494850181558252902090910180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169091179055565b6000806108ef83806128d4565b9050119050919050565b600082808203610935576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610944600185612898565b81811061095357610953612940565b9050602002810190610965919061296f565b610976906080810190606001612463565b9050600061098382610e0a565b905073ffffffffffffffffffffffffffffffffffffffff82166109ad576109aa3482612898565b90505b60006109b98888610ec3565b90506109c58888610fcf565b6109d28a89898985611030565b6000826109de85610e0a565b6109e89190612898565b905089811015610a33576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b6000610a508360e001516113e2565b9050610a8583608001517f00000000000000000000000000000000000000000000000000000000000000008560c00151611460565b6000836101200151610a9b578360a00151610aab565b610aab6040840160208501612463565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16638aac16ba846040013584848860800151886080016020810190610b089190612463565b60c08b015160608b0135610b1c8c806128d4565b6040518a63ffffffff1660e01b8152600401610b3f9897969594939291906129ad565b60206040518083038185885af1158015610b5d573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610b829190612a49565b507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f184604051610bb29190612ad0565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff831615610bec57610be78383836115ab565b505050565b610be782826116da565b73ffffffffffffffffffffffffffffffffffffffff8216610c4f5780341015610c4b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003610c89576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610cf6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d1a9190612a49565b905081811015610d60576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610a2a565b610be783333085611804565b73ffffffffffffffffffffffffffffffffffffffff8116610db9576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163b60000361018b576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615610ebb576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610e92573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eb69190612a49565b610ebd565b475b92915050565b60608160008167ffffffffffffffff811115610ee157610ee161247e565b604051908082528060200260200182016040528015610f0a578160200160208202803683370190505b5090506000805b83811015610fc457868682818110610f2b57610f2b612940565b9050602002810190610f3d919061296f565b610f4e906080810190606001612463565b9150610f5982610e0a565b838281518110610f6b57610f6b612940565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610fbc5734838281518110610fa457610fa4612940565b60200260200101818151610fb89190612898565b9052505b600101610f11565b509095945050505050565b60005b81811015610be7576000838383818110610fee57610fee612940565b9050602002810190611000919061296f565b61100990612be3565b90508060c00151156110275761102781604001518260800151610bf6565b50600101610fd2565b8383838382600181146112fd576000858561104c600185612898565b81811061105b5761105b612940565b905060200281019061106d919061296f565b61107e906080810190606001612463565b9050600089815b8181101561122957368d8d838181106110a0576110a0612940565b90506020028101906110b2919061296f565b90506110e16110c76060830160408401612463565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061114457506111446110fa6040830160208401612463565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561115b575061115b6110fa6020830183612463565b80156111e057506111e061117260a08301836128d4565b61118191600491600091612c88565b61118a91612cb2565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611216576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112208f82611a1e565b50600101611085565b505060005b611239600185612898565b8110156112f557600088888381811061125457611254612940565b9050602002810190611266919061296f565b611277906080810190606001612463565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146112ec578582815181106112be576112be612940565b60200260200101516112cf82610e0a565b6112d99190612898565b925082156112ec576112ec818885610bc0565b5060010161122e565b5050506113d6565b8760005b818110156113d357368b8b8381811061131c5761131c612940565b905060200281019061132e919061296f565b90506113436110c76060830160408401612463565b8061135c575061135c6110fa6040830160208401612463565b801561137357506113736110fa6020830183612463565b801561138a575061138a61117260a08301836128d4565b6113c0576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113ca8d82611a1e565b50600101611301565b50505b50505050505050505050565b60008181527feb4198458a814793befc1a2917bf545aff2a1c03cd5d74bd029e61245d484aaf6020819052604082205463ffffffff16808303611459576040517f34d1a6a800000000000000000000000000000000000000000000000000000000815263ffffffff82166004820152602401610a2a565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff831661148057505050565b73ffffffffffffffffffffffffffffffffffffffff82166114cd576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015611543573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115679190612a49565b9050818110156115a5576115a584846115a0847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612898565b611d34565b50505050565b73ffffffffffffffffffffffffffffffffffffffff83166115f8576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611665573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116899190612a49565b9050808211156116cf576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610a2a565b6115a5848484611eb0565b73ffffffffffffffffffffffffffffffffffffffff8216611727576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b4781111561176a576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610a2a565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146117c4576040519150601f19603f3d011682016040523d82523d6000602084013e6117c9565b606091505b5050905080610be7576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611851576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661189e576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa15801561190f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119339190612a49565b905061194182868686611f06565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa1580156119b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119d59190612a49565b6119df9190612898565b14611a16576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b611a34611a2e6020830183612463565b3b151590565b611a6a576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611aaa576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611abf6110c76060850160408601612463565b611aca576000611ad0565b82608001355b90506000611aec611ae76060860160408701612463565b610e0a565b90506000611b03611ae76080870160608801612463565b905082600003611b3a57611b3a611b206060870160408801612463565b611b306040880160208901612463565b8760800135611460565b8460800135821015611b85576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610a2a565b600080611b956020880188612463565b73ffffffffffffffffffffffffffffffffffffffff1685611bb960a08a018a6128d4565b604051611bc7929190612cfa565b60006040518083038185875af1925050503d8060008114611c04576040519150601f19603f3d011682016040523d82523d6000602084013e611c09565b606091505b509150915081611c54576000611c1e82611f64565b9050806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2a9190612d0a565b6000611c69611ae760808a0160608b01612463565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611c9a60208b018b612463565b611caa60608c0160408d01612463565b611cba60808d0160608e01612463565b8c60800135898711611ccc5786611cd6565b611cd68a88612898565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015611dab573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611dcf9190612a49565b611dd99190612d1d565b60405173ffffffffffffffffffffffffffffffffffffffff85166024820152604481018290529091506115a59085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611fdb565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610be79084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611e2e565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526115a59085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611e2e565b6060604482511015611fa957505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611fc56004808551611fbd9190612898565b8591906120e7565b9050808060200190518101906114599190612d30565b600061203d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166122019092919063ffffffff16565b805190915015610be7578080602001905181019061205b9190612da7565b610be7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610a2a565b6060816120f581601f612d1d565b101561212d576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6121378284612d1d565b84511015612171576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60608215801561219057604051915060008252602082016040526121f8565b6040519150601f8416801560200281840101858101878315602002848b0101015b818310156121c95780518352602092830192016121b1565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b60606122108484600085612218565b949350505050565b6060824710156122aa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610a2a565b73ffffffffffffffffffffffffffffffffffffffff85163b612328576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610a2a565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516123519190612dc4565b60006040518083038185875af1925050503d806000811461238e576040519150601f19603f3d011682016040523d82523d6000602084013e612393565b606091505b50915091506123a38282866123ae565b979650505050505050565b606083156123bd575081611459565b8251156123cd5782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2a9190612d0a565b6000806040838503121561241457600080fd5b82359150602083013563ffffffff8116811461242f57600080fd5b809150509250929050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461245e57600080fd5b919050565b60006020828403121561247557600080fd5b6114598261243a565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156124d1576124d161247e565b60405290565b60405160e0810167ffffffffffffffff811182821017156124d1576124d161247e565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156125415761254161247e565b604052919050565b600067ffffffffffffffff8211156125635761256361247e565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f8301126125a057600080fd5b81356125b36125ae82612549565b6124fa565b8181528460208386010111156125c857600080fd5b816020850160208301376000918101602001919091529392505050565b801515811461018b57600080fd5b803561245e816125e5565b6000610140828403121561261157600080fd5b6126196124ad565b905081358152602082013567ffffffffffffffff8082111561263a57600080fd5b6126468583860161258f565b6020840152604084013591508082111561265f57600080fd5b5061266c8482850161258f565b60408301525061267e6060830161243a565b606082015261268f6080830161243a565b60808201526126a060a0830161243a565b60a082015260c082013560c082015260e082013560e08201526101006126c78184016125f3565b908201526101206126d98382016125f3565b9082015292915050565b600060a082840312156126f557600080fd5b50919050565b6000806000806060858703121561271157600080fd5b843567ffffffffffffffff8082111561272957600080fd5b612735888389016125fe565b9550602087013591508082111561274b57600080fd5b818701915087601f83011261275f57600080fd5b81358181111561276e57600080fd5b8860208260051b850101111561278357600080fd5b6020830195508094505060408701359150808211156127a157600080fd5b506127ae878288016126e3565b91505092959194509250565b6000602082840312156127cc57600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461145957600080fd5b6000806040838503121561280f57600080fd5b823567ffffffffffffffff8082111561282757600080fd5b90840190610140828703121561283c57600080fd5b9092506020840135908082111561285257600080fd5b5061285f858286016126e3565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610ebd57610ebd612869565b6000610ebd36836125fe565b6000602082840312156128c957600080fd5b8135611459816125e5565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261290957600080fd5b83018035915067ffffffffffffffff82111561292457600080fd5b60200191503681900382131561293957600080fd5b9250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126129a357600080fd5b9190910192915050565b63ffffffff89168152600073ffffffffffffffffffffffffffffffffffffffff808a16602084015280891660408401528088166060840152508560808301528460a083015260e060c08301528260e08301526101008385828501376000838501820152601f9093017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910190910198975050505050505050565b600060208284031215612a5b57600080fd5b5051919050565b60005b83811015612a7d578181015183820152602001612a65565b50506000910152565b60008151808452612a9e816020860160208601612a62565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081528151602082015260006020830151610140806040850152612af9610160850183612a86565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152612b348382612a86565b9250506060850151612b5e608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120612bd18187018315159052565b90950151151593019290925250919050565b600060e08236031215612bf557600080fd5b612bfd6124d7565b612c068361243a565b8152612c146020840161243a565b6020820152612c256040840161243a565b6040820152612c366060840161243a565b60608201526080830135608082015260a083013567ffffffffffffffff811115612c5f57600080fd5b612c6b3682860161258f565b60a083015250612c7d60c084016125f3565b60c082015292915050565b60008085851115612c9857600080fd5b83861115612ca557600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612cf25780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b6020815260006114596020830184612a86565b80820180821115610ebd57610ebd612869565b600060208284031215612d4257600080fd5b815167ffffffffffffffff811115612d5957600080fd5b8201601f81018413612d6a57600080fd5b8051612d786125ae82612549565b818152856020838501011115612d8d57600080fd5b612d9e826020830160208601612a62565b95945050505050565b600060208284031215612db957600080fd5b8151611459816125e5565b600082516129a3818460208701612a6256fea264697066735822122090fb4c49d77f6dc2c9a328df0eae2d163e525b3c8b0a749fb7cf5d9fba35454964736f6c63430008110033";

type TestAmarokFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestAmarokFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestAmarokFacet__factory extends ContractFactory {
  constructor(...args: TestAmarokFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _connextHandler: PromiseOrValue<string>,
    _srcChainDomain: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestAmarokFacet> {
    return super.deploy(
      _connextHandler,
      _srcChainDomain,
      overrides || {}
    ) as Promise<TestAmarokFacet>;
  }
  override getDeployTransaction(
    _connextHandler: PromiseOrValue<string>,
    _srcChainDomain: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _connextHandler,
      _srcChainDomain,
      overrides || {}
    );
  }
  override attach(address: string): TestAmarokFacet {
    return super.attach(address) as TestAmarokFacet;
  }
  override connect(signer: Signer): TestAmarokFacet__factory {
    return super.connect(signer) as TestAmarokFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestAmarokFacetInterface {
    return new utils.Interface(_abi) as TestAmarokFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestAmarokFacet {
    return new Contract(address, _abi, signerOrProvider) as TestAmarokFacet;
  }
}
