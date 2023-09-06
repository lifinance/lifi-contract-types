/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LIFuelFacet, LIFuelFacetInterface } from "../LIFuelFacet";

const _abi = [
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
    name: "startBridgeTokensViaLIFuel",
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
    name: "swapAndStartBridgeTokensViaLIFuel",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50612804806100206000396000f3fe6080604052600436106100295760003560e01c8063552062161461002e5780639b6ee8e414610043575b600080fd5b61004161003c3660046122c4565b610056565b005b61004161005136600461235e565b610286565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e234476123c2565b905085806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561015f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101828160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610234576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024989600001518a60c001518a8a336104a8565b60c08a0152610257896105f0565b5047915050818111156102795761027960008461027485856123c2565b61083d565b5050600090915550505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610301576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061031234476123c2565b90508380610100015115610352576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610120015115610390576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856103b38160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103ea576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610428576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610465576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047787608001518860c00151610873565b610480876105f0565b50479150508181111561049d5761049d60008461027485856123c2565b505060009091555050565b6000828082036104e4576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856104f36001856123c2565b818110610502576105026123d5565b90506020028101906105149190612404565b610525906080810190606001612442565b90506000610532826109e9565b905073ffffffffffffffffffffffffffffffffffffffff821661055c5761055934826123c2565b90505b60006105688888610aa2565b90506105748888610bae565b6105818a89898985610c1b565b60008261058d856109e9565b61059791906123c2565b9050898110156105e2576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b60007fddb1a97e204589b19d70796e7a3363c86670116d11313290b7a7eb064a8f3da1604080518082018252601381527f53657276696365466565436f6c6c6563746f7200000000000000000000000000602082015290516106529190612481565b90815260405190819003602001902054608083015173ffffffffffffffffffffffffffffffffffffffff909116915061069f9073ffffffffffffffffffffffffffffffffffffffff161590565b156107415760c082015160e083015160a08401516040517fdef65669000000000000000000000000000000000000000000000000000000008152600481019290925273ffffffffffffffffffffffffffffffffffffffff908116602483015283169163def65669916044016000604051808303818588803b15801561072357600080fd5b505af1158015610737573d6000803e3d6000fd5b5050505050610802565b6107548260800151828460c00151610fcd565b608082015160c083015160e084015160a08501516040517f1eacd35f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9485166004820152602481019390935260448301919091528216606482015290821690631eacd35f90608401600060405180830381600087803b1580156107e957600080fd5b505af11580156107fd573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161083191906124dd565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83161561086957610864838383611110565b505050565b6108648282611292565b806000036108ad576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166109065780341015610902576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610973573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061099791906125f0565b9050818110156109dd576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105d9565b610864833330856113bc565b600073ffffffffffffffffffffffffffffffffffffffff821615610a9a576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610a71573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a9591906125f0565b610a9c565b475b92915050565b60608160008167ffffffffffffffff811115610ac057610ac0612056565b604051908082528060200260200182016040528015610ae9578160200160208202803683370190505b5090506000805b83811015610ba357868682818110610b0a57610b0a6123d5565b9050602002810190610b1c9190612404565b610b2d906080810190606001612442565b9150610b38826109e9565b838281518110610b4a57610b4a6123d5565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610b9b5734838281518110610b8357610b836123d5565b60200260200101818151610b9791906123c2565b9052505b600101610af0565b509095945050505050565b60005b818110156108645736838383818110610bcc57610bcc6123d5565b9050602002810190610bde9190612404565b9050610bf060e0820160c08301612609565b15610c1257610c12610c086060830160408401612442565b8260800135610873565b50600101610bb1565b838383838260018114610ee85760008585610c376001856123c2565b818110610c4657610c466123d5565b9050602002810190610c589190612404565b610c69906080810190606001612442565b9050600089815b81811015610e1457368d8d83818110610c8b57610c8b6123d5565b9050602002810190610c9d9190612404565b9050610ccc610cb26060830160408401612442565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610d2f5750610d2f610ce56040830160208401612442565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610d465750610d46610ce56020830183612442565b8015610dcb5750610dcb610d5d60a0830183612626565b610d6c91600491600091612692565b610d75916126bc565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610e01576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e0b8f826115d6565b50600101610c70565b505060005b610e246001856123c2565b811015610ee0576000888883818110610e3f57610e3f6123d5565b9050602002810190610e519190612404565b610e62906080810190606001612442565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ed757858281518110610ea957610ea96123d5565b6020026020010151610eba826109e9565b610ec491906123c2565b92508215610ed757610ed781888561083d565b50600101610e19565b505050610fc1565b8760005b81811015610fbe57368b8b83818110610f0757610f076123d5565b9050602002810190610f199190612404565b9050610f2e610cb26060830160408401612442565b80610f475750610f47610ce56040830160208401612442565b8015610f5e5750610f5e610ce56020830183612442565b8015610f755750610f75610d5d60a0830183612626565b610fab576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fb58d826115d6565b50600101610eec565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610fed57505050565b73ffffffffffffffffffffffffffffffffffffffff821661103a576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156110af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110d391906125f0565b1015610864576110e5838360006118ec565b61086483837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6118ec565b73ffffffffffffffffffffffffffffffffffffffff831661115d576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166111aa576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611217573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061123b91906125f0565b905080821115611281576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105d9565b61128c848484611aec565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166112df576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611322576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016105d9565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461137c576040519150601f19603f3d011682016040523d82523d6000602084013e611381565b606091505b5050905080610864576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611409576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611456576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156114c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114eb91906125f0565b90506114f982868686611b42565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611569573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061158d91906125f0565b61159791906123c2565b146115ce576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6115ec6115e66020830183612442565b3b151590565b611622576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611662576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611677610cb26060850160408601612442565b611682576000611688565b82608001355b905060006116a461169f6060860160408701612442565b6109e9565b905060006116bb61169f6080870160608801612442565b9050826000036116f2576116f26116d86060870160408801612442565b6116e86040880160208901612442565b8760800135610fcd565b846080013582101561173d576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016105d9565b60008061174d6020880188612442565b73ffffffffffffffffffffffffffffffffffffffff168561177160a08a018a612626565b60405161177f929190612704565b60006040518083038185875af1925050503d80600081146117bc576040519150601f19603f3d011682016040523d82523d6000602084013e6117c1565b606091505b50915091508161180c5760006117d682611ba0565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d99190612714565b600061182161169f60808a0160608b01612442565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961185260208b018b612442565b61186260608c0160408d01612442565b61187260808d0160608e01612442565b8c60800135898711611884578661188e565b61188e8a886123c2565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b80158061198c57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611966573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061198a91906125f0565b155b611a18576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016105d9565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108649084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611c1e565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108649084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611a6a565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261128c9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611a6a565b6060604482511015611be557505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611c016004808551611bf991906123c2565b859190611d2d565b905080806020019051810190611c179190612727565b9392505050565b6000611c80826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611e479092919063ffffffff16565b9050805160001480611ca1575080806020019051810190611ca1919061279e565b610864576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016105d9565b606081611d3b81601f6127bb565b1015611d73576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611d7d82846127bb565b84511015611db7576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611dd65760405191506000825260208201604052611e3e565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611e0f578051835260209283019201611df7565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060611e568484600085611e5e565b949350505050565b606082471015611ef0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016105d9565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611f199190612481565b60006040518083038185875af1925050503d8060008114611f56576040519150601f19603f3d011682016040523d82523d6000602084013e611f5b565b606091505b5091509150611f6c87838387611f77565b979650505050505050565b6060831561200d5782516000036120065773ffffffffffffffffffffffffffffffffffffffff85163b612006576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105d9565b5081611e56565b611e5683838151156120225781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d99190612714565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156120a9576120a9612056565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156120f6576120f6612056565b604052919050565b600067ffffffffffffffff82111561211857612118612056565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261215557600080fd5b8135612168612163826120fe565b6120af565b81815284602083860101111561217d57600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146121be57600080fd5b919050565b80151581146121d157600080fd5b50565b80356121be816121c3565b600061014082840312156121f257600080fd5b6121fa612085565b905081358152602082013567ffffffffffffffff8082111561221b57600080fd5b61222785838601612144565b6020840152604084013591508082111561224057600080fd5b5061224d84828501612144565b60408301525061225f6060830161219a565b60608201526122706080830161219a565b608082015261228160a0830161219a565b60a082015260c082013560c082015260e082013560e08201526101006122a88184016121d4565b908201526101206122ba8382016121d4565b9082015292915050565b6000806000604084860312156122d957600080fd5b833567ffffffffffffffff808211156122f157600080fd5b6122fd878388016121df565b9450602086013591508082111561231357600080fd5b818601915086601f83011261232757600080fd5b81358181111561233657600080fd5b8760208260051b850101111561234b57600080fd5b6020830194508093505050509250925092565b60006020828403121561237057600080fd5b813567ffffffffffffffff81111561238757600080fd5b611e56848285016121df565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610a9c57610a9c612393565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261243857600080fd5b9190910192915050565b60006020828403121561245457600080fd5b611c178261219a565b60005b83811015612478578181015183820152602001612460565b50506000910152565b6000825161243881846020870161245d565b600081518084526124ab81602086016020860161245d565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081528151602082015260006020830151610140806040850152612506610160850183612493565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526125418382612493565b925050606085015161256b608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125de8187018315159052565b90950151151593019290925250919050565b60006020828403121561260257600080fd5b5051919050565b60006020828403121561261b57600080fd5b8135611c17816121c3565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261265b57600080fd5b83018035915067ffffffffffffffff82111561267657600080fd5b60200191503681900382131561268b57600080fd5b9250929050565b600080858511156126a257600080fd5b838611156126af57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156126fc5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611c176020830184612493565b60006020828403121561273957600080fd5b815167ffffffffffffffff81111561275057600080fd5b8201601f8101841361276157600080fd5b805161276f612163826120fe565b81815285602083850101111561278457600080fd5b61279582602083016020860161245d565b95945050505050565b6000602082840312156127b057600080fd5b8151611c17816121c3565b80820180821115610a9c57610a9c61239356fea2646970667358221220b3799f8eca70e87a4b43b424e601a63e027028b5d4dfcc367c49c357034d8d2564736f6c63430008110033";

type LIFuelFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LIFuelFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LIFuelFacet__factory extends ContractFactory {
  constructor(...args: LIFuelFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LIFuelFacet> {
    return super.deploy(overrides || {}) as Promise<LIFuelFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LIFuelFacet {
    return super.attach(address) as LIFuelFacet;
  }
  override connect(signer: Signer): LIFuelFacet__factory {
    return super.connect(signer) as LIFuelFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LIFuelFacetInterface {
    return new utils.Interface(_abi) as LIFuelFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LIFuelFacet {
    return new Contract(address, _abi, signerOrProvider) as LIFuelFacet;
  }
}
