/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { HyphenFacet, HyphenFacetInterface } from "../HyphenFacet";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IHyphenRouter",
        name: "_router",
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
    name: "startBridgeTokensViaHyphen",
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
    name: "swapAndStartBridgeTokensViaHyphen",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b506040516200292938038062002929833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612887620000a26000396000818161067d015281816106f701526107b101526128876000f3fe6080604052600436106100295760003560e01c80638bf6ef991461002e5780639feb673114610043575b600080fd5b61004161003c3660046121e7565b610056565b005b61004161005136600461221c565b610290565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e234476122e5565b90508380610100015115610122576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610120015115610160576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101838160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101ba576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610235576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024787608001518860c001516104d3565b61025087610653565b5047915060009050828211610266576000610270565b61027083836122e5565b905080156102845761028460008583610853565b50506000909255505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161030b576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061031c34476122e5565b90508580610100015161035b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610399576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876103bc8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103f3576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610431576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361046e576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61048389600001518a60c001518a8a33610884565b60c08a015261049189610653565b50479150600090508282116104a75760006104b1565b6104b183836122e5565b905080156104c5576104c560008583610853565b505060009092555050505050565b73ffffffffffffffffffffffffffffffffffffffff821661052c5780341015610528576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003610566576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156105d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f791906122f8565b905081811015610642576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61064e833330856109c7565b505050565b608081015173ffffffffffffffffffffffffffffffffffffffff1615610765576106a681608001517f00000000000000000000000000000000000000000000000000000000000000008360c00151610be1565b60e0810151608082015160a083015160c08401516040517f55d7359500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016946355d735959461072e9491939092600401612311565b600060405180830381600087803b15801561074857600080fd5b505af115801561075c573d6000803e3d6000fd5b50505050610819565b60c081015160a082015160e08301516040517fea36842100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169363ea3684219390926107e69260040161238a565b6000604051808303818588803b1580156107ff57600080fd5b505af1158015610813573d6000803e3d6000fd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1816040516108489190612457565b60405180910390a150565b73ffffffffffffffffffffffffffffffffffffffff83161561087a5761064e838383610d2c565b61064e8282610e5b565b6000828082036108c0576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856108cf6001856122e5565b8181106108de576108de61256a565b90506020028101906108f09190612599565b6109019060808101906060016125d7565b9050600061090e82610f85565b905073ffffffffffffffffffffffffffffffffffffffff82166109385761093534826122e5565b90505b6000610944888861103e565b9050610950888861114a565b61095d8a898989856111ab565b60008261096985610f85565b61097391906122e5565b9050898110156109b9576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b905260248101829052604401610639565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610a14576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a61576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610ad2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af691906122f8565b9050610b048286868661155d565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610b74573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b9891906122f8565b610ba291906122e5565b14610bd9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610c0157505050565b73ffffffffffffffffffffffffffffffffffffffff8216610c4e576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015610cc4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ce891906122f8565b905081811015610d2657610d268484610d21847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6122e5565b611639565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610d79576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610de6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e0a91906122f8565b905080821115610e50576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610639565b610d26848484611737565b73ffffffffffffffffffffffffffffffffffffffff8216610ea8576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610eeb576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610639565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610f45576040519150601f19603f3d011682016040523d82523d6000602084013e610f4a565b606091505b505090508061064e576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615611036576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa15801561100d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061103191906122f8565b611038565b475b92915050565b60608160008167ffffffffffffffff81111561105c5761105c611f56565b604051908082528060200260200182016040528015611085578160200160208202803683370190505b5090506000805b8381101561113f578686828181106110a6576110a661256a565b90506020028101906110b89190612599565b6110c99060808101906060016125d7565b91506110d482610f85565b8382815181106110e6576110e661256a565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611137573483828151811061111f5761111f61256a565b6020026020010181815161113391906122e5565b9052505b60010161108c565b509095945050505050565b60005b8181101561064e5760008383838181106111695761116961256a565b905060200281019061117b9190612599565b611184906125f2565b90508060c00151156111a2576111a2816040015182608001516104d3565b5060010161114d565b83838383826001811461147857600085856111c76001856122e5565b8181106111d6576111d661256a565b90506020028101906111e89190612599565b6111f99060808101906060016125d7565b9050600089815b818110156113a457368d8d8381811061121b5761121b61256a565b905060200281019061122d9190612599565b905061125c61124260608301604084016125d7565b73ffffffffffffffffffffffffffffffffffffffff161590565b806112bf57506112bf61127560408301602084016125d7565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156112d657506112d661127560208301836125d7565b801561135b575061135b6112ed60a0830183612697565b6112fc91600491600091612703565b6113059161272d565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611391576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61139b8f8261178d565b50600101611200565b505060005b6113b46001856122e5565b8110156114705760008888838181106113cf576113cf61256a565b90506020028101906113e19190612599565b6113f29060808101906060016125d7565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611467578582815181106114395761143961256a565b602002602001015161144a82610f85565b61145491906122e5565b9250821561146757611467818885610853565b506001016113a9565b505050611551565b8760005b8181101561154e57368b8b838181106114975761149761256a565b90506020028101906114a99190612599565b90506114be61124260608301604084016125d7565b806114d757506114d761127560408301602084016125d7565b80156114ee57506114ee61127560208301836125d7565b801561150557506115056112ed60a0830183612697565b61153b576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115458d8261178d565b5060010161147c565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610d269085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611aa3565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa1580156116b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116d491906122f8565b6116de9190612775565b60405173ffffffffffffffffffffffffffffffffffffffff8516602482015260448101829052909150610d269085907f095ea7b300000000000000000000000000000000000000000000000000000000906064016115b7565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261064e9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016115b7565b6117a361179d60208301836125d7565b3b151590565b6117d9576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611819576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061182e61124260608501604086016125d7565b61183957600061183f565b82608001355b9050600061185b61185660608601604087016125d7565b610f85565b9050600061187261185660808701606088016125d7565b9050826000036118a9576118a961188f60608701604088016125d7565b61189f60408801602089016125d7565b8760800135610be1565b84608001358210156118f4576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610639565b60008061190460208801886125d7565b73ffffffffffffffffffffffffffffffffffffffff168561192860a08a018a612697565b604051611936929190612788565b60006040518083038185875af1925050503d8060008114611973576040519150601f19603f3d011682016040523d82523d6000602084013e611978565b606091505b5091509150816119c357600061198d82611baf565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106399190612798565b60006119d861185660808a0160608b016125d7565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611a0960208b018b6125d7565b611a1960608c0160408d016125d7565b611a2960808d0160608e016125d7565b8c60800135898711611a3b5786611a45565b611a458a886122e5565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611b05826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611c2d9092919063ffffffff16565b80519091501561064e5780806020019051810190611b2391906127ab565b61064e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610639565b6060604482511015611bf457505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611c106004808551611c0891906122e5565b859190611c44565b905080806020019051810190611c2691906127c8565b9392505050565b6060611c3c8484600085611d5e565b949350505050565b606081611c5281601f612775565b1015611c8a576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611c948284612775565b84511015611cce576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611ced5760405191506000825260208201604052611d55565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611d26578051835260209283019201611d0e565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b606082471015611df0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610639565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611e19919061283f565b60006040518083038185875af1925050503d8060008114611e56576040519150601f19603f3d011682016040523d82523d6000602084013e611e5b565b606091505b5091509150611e6c87838387611e77565b979650505050505050565b60608315611f0d578251600003611f065773ffffffffffffffffffffffffffffffffffffffff85163b611f06576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610639565b5081611c3c565b611c3c8383815115611f225781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106399190612798565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611fa957611fa9611f56565b60405290565b60405160e0810167ffffffffffffffff81118282101715611fa957611fa9611f56565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561201957612019611f56565b604052919050565b600067ffffffffffffffff82111561203b5761203b611f56565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261207857600080fd5b813561208b61208682612021565b611fd2565b8181528460208386010111156120a057600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146120e157600080fd5b919050565b80151581146120f457600080fd5b50565b80356120e1816120e6565b6000610140828403121561211557600080fd5b61211d611f85565b905081358152602082013567ffffffffffffffff8082111561213e57600080fd5b61214a85838601612067565b6020840152604084013591508082111561216357600080fd5b5061217084828501612067565b604083015250612182606083016120bd565b6060820152612193608083016120bd565b60808201526121a460a083016120bd565b60a082015260c082013560c082015260e082013560e08201526101006121cb8184016120f7565b908201526101206121dd8382016120f7565b9082015292915050565b6000602082840312156121f957600080fd5b813567ffffffffffffffff81111561221057600080fd5b611c3c84828501612102565b60008060006040848603121561223157600080fd5b833567ffffffffffffffff8082111561224957600080fd5b61225587838801612102565b9450602086013591508082111561226b57600080fd5b818601915086601f83011261227f57600080fd5b81358181111561228e57600080fd5b8760208260051b85010111156122a357600080fd5b6020830194508093505050509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115611038576110386122b6565b60006020828403121561230a57600080fd5b5051919050565b848152600073ffffffffffffffffffffffffffffffffffffffff808616602084015280851660408401525082606083015260a0608083015261238060a08301600481527f4c49464900000000000000000000000000000000000000000000000000000000602082015260400190565b9695505050505050565b73ffffffffffffffffffffffffffffffffffffffff83168152816020820152606060408201526000611c3c60608301600481527f4c49464900000000000000000000000000000000000000000000000000000000602082015260400190565b60005b838110156124045781810151838201526020016123ec565b50506000910152565b600081518084526124258160208601602086016123e9565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261248061016085018361240d565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526124bb838261240d565b92505060608501516124e5608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125588187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126125cd57600080fd5b9190910192915050565b6000602082840312156125e957600080fd5b611c26826120bd565b600060e0823603121561260457600080fd5b61260c611faf565b612615836120bd565b8152612623602084016120bd565b6020820152612634604084016120bd565b6040820152612645606084016120bd565b60608201526080830135608082015260a083013567ffffffffffffffff81111561266e57600080fd5b61267a36828601612067565b60a08301525061268c60c084016120f7565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126126cc57600080fd5b83018035915067ffffffffffffffff8211156126e757600080fd5b6020019150368190038213156126fc57600080fd5b9250929050565b6000808585111561271357600080fd5b8386111561272057600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561276d5780818660040360031b1b83161692505b505092915050565b80820180821115611038576110386122b6565b8183823760009101908152919050565b602081526000611c26602083018461240d565b6000602082840312156127bd57600080fd5b8151611c26816120e6565b6000602082840312156127da57600080fd5b815167ffffffffffffffff8111156127f157600080fd5b8201601f8101841361280257600080fd5b805161281061208682612021565b81815285602083850101111561282557600080fd5b6128368260208301602086016123e9565b95945050505050565b600082516125cd8184602087016123e956fea2646970667358221220571bd77dd0d4cf8cbbd3b0e897d159052a64647a88a36036f05bf002237c4a1364736f6c63430008110033";

type HyphenFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HyphenFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HyphenFacet__factory extends ContractFactory {
  constructor(...args: HyphenFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _router: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<HyphenFacet> {
    return super.deploy(_router, overrides || {}) as Promise<HyphenFacet>;
  }
  override getDeployTransaction(
    _router: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_router, overrides || {});
  }
  override attach(address: string): HyphenFacet {
    return super.attach(address) as HyphenFacet;
  }
  override connect(signer: Signer): HyphenFacet__factory {
    return super.connect(signer) as HyphenFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HyphenFacetInterface {
    return new utils.Interface(_abi) as HyphenFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HyphenFacet {
    return new Contract(address, _abi, signerOrProvider) as HyphenFacet;
  }
}
