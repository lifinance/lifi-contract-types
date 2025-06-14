/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { MayanFacet, MayanFacetInterface } from "../MayanFacet";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_mayan",
        type: "address",
        internalType: "contract IMayan",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "mayan",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IMayan",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "startBridgeTokensViaMayan",
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
        name: "_mayanData",
        type: "tuple",
        internalType: "struct MayanFacet.MayanData",
        components: [
          {
            name: "nonEVMReceiver",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "mayanProtocol",
            type: "address",
            internalType: "address",
          },
          {
            name: "protocolData",
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
    name: "swapAndStartBridgeTokensViaMayan",
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
        name: "_mayanData",
        type: "tuple",
        internalType: "struct MayanFacet.MayanData",
        components: [
          {
            name: "nonEVMReceiver",
            type: "bytes32",
            internalType: "bytes32",
          },
          {
            name: "mayanProtocol",
            type: "address",
            internalType: "address",
          },
          {
            name: "protocolData",
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
    name: "AssetSwapped",
    inputs: [
      {
        name: "transactionId",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
      },
      {
        name: "dex",
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
    name: "BridgeToNonEVMChain",
    inputs: [
      {
        name: "transactionId",
        type: "bytes32",
        indexed: true,
        internalType: "bytes32",
      },
      {
        name: "destinationChainId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "receiver",
        type: "bytes32",
        indexed: false,
        internalType: "bytes32",
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
    name: "InvalidNonEVMReceiver",
    inputs: [
      {
        name: "expected",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "actual",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
  },
  {
    type: "error",
    name: "InvalidReceiver",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidReceiver",
    inputs: [
      {
        name: "expected",
        type: "address",
        internalType: "address",
      },
      {
        name: "actual",
        type: "address",
        internalType: "address",
      },
    ],
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
    name: "NullAddrIsNotAValidSpender",
    inputs: [],
  },
  {
    type: "error",
    name: "ReentrancyError",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x60a060405234801561000f575f5ffd5b5060405161289f38038061289f83398101604081905261002e9161003f565b6001600160a01b031660805261006c565b5f6020828403121561004f575f5ffd5b81516001600160a01b0381168114610065575f5ffd5b9392505050565b6080516128076100985f395f8181607001528181610dba01528181610de50152610ed201526128075ff3fe608060405260043610610033575f3560e01c806330c4895214610037578063b621b0321461004c578063bc98b5dc1461005f575b5f5ffd5b61004a6100453660046120b0565b6100bb565b005b61004a61005a366004612176565b6103bb565b34801561006a575f5ffd5b506100927f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f610146344761220e565b905086806101000151610185576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156101c3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886101e68160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561021d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361025a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610297576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102ab8a5f01518b60c001518b8b33610617565b60c08b015260808a01515f9073ffffffffffffffffffffffffffffffffffffffff161580610349578b6080015173ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610320573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906103449190612221565b61034c565b60125b60ff16915061035f8c60c001518361075a565b60c08d0152806103815761037b89604001518d60c001516107b5565b60408a01525b61038b8c8a610bd0565b50479350505050818111156103ae576103ae5f846103a9858561220e565b610ffa565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610436576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f610446344761220e565b90508461046b8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156104a2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104df576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361051c576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561055a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610598576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105aa88608001518960c0015161102f565b608088015173ffffffffffffffffffffffffffffffffffffffff166105de576105d88860c00151601261075a565b60c08901525b6105f0886105eb89612241565b610bd0565b50479150508181111561060c5761060c5f846103a9858561220e565b50505f909155505050565b5f82808203610652576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f858561066060018561220e565b81811061066f5761066f61224c565b90506020028101906106819190612279565b6106929060808101906060016122b5565b90505f61069e826110e3565b905073ffffffffffffffffffffffffffffffffffffffff82166106c8576106c5348261220e565b90505b5f6106d3888861112c565b90506106df8888611236565b6106ec8a898989856112a2565b5f826106f7856110e3565b610701919061220e565b90508981101561074c576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b5f60088260ff1611156107ac576107726008836122ce565b61077d90600a612408565b6107879084612416565b92506107946008836122ce565b61079f90600a612408565b6107a9908461244e565b92505b50815b92915050565b6060604483511015610823576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601760248201527f70726f746f636f6c206461746120746f6f2073686f72740000000000000000006044820152606401610743565b5f835167ffffffffffffffff81111561083e5761083e611ded565b6040519080825280601f01601f191660200182016040528015610868576020820181803683370190505b5090505f6018856003815181106108815761088161224c565b016020015186517fff0000000000000000000000000000000000000000000000000000000000000090911690911c90601090879060029081106108c6576108c661224c565b016020015187517fff0000000000000000000000000000000000000000000000000000000000000090911690911c906008908890600190811061090b5761090b61224c565b016020015188517fff0000000000000000000000000000000000000000000000000000000000000090911690911c9088905f9061094a5761094a61224c565b01602001517fff000000000000000000000000000000000000000000000000000000000000001617171790505f7f6111ad25000000000000000000000000000000000000000000000000000000007f9eee52db000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008416016109f75761010087516109f0919061220e565b91506109fc565b602491505b5f5b82811015610a6b57878181518110610a1857610a1861224c565b602001015160f81c60f81b858281518110610a3557610a3561224c565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a9053506001016109fe565b505f86604051602001610a8091815260200190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905290505f5b6020811015610b4557818181518110610acd57610acd61224c565b01602001517fff000000000000000000000000000000000000000000000000000000000000001686610aff8684612465565b81518110610b0f57610b0f61224c565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a905350600101610ab2565b505f610b52846020612465565b90505b8851811015610bc357888181518110610b7057610b7061224c565b602001015160f81c60f81b868281518110610b8d57610b8d61224c565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a905350600101610b55565b5093979650505050505050565b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1603610cbd578051610c5f5780516040517f4c568e5900000000000000000000000000000000000000000000000000000000815260048101919091525f6024820152604401610743565b5f610c6d826040015161164d565b82519091508114610cb75781516040517f4c568e59000000000000000000000000000000000000000000000000000000008152600481019190915260248101829052604401610743565b50610d60565b5f610ccb826040015161164d565b5f1c90508073ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1614610d5e5760a08301516040517f9aa0267000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201529082166024820152604401610743565b505b610d906040518060a001604052805f81526020015f81526020015f60ff1681526020015f81526020015f81525090565b608083015173ffffffffffffffffffffffffffffffffffffffff1615610e8657610de383608001517f00000000000000000000000000000000000000000000000000000000000000008560c00151611740565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e4269fc484608001518560c0015184866020015187604001516040518663ffffffff1660e01b8152600401610e549594939291906124c4565b5f604051808303815f87803b158015610e6b575f5ffd5b505af1158015610e7d573d5f5f3e3d5ffd5b50505050610f36565b60c0830151602083015160408085015190517fb0f584ff00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169363b0f584ff939092610f0792600401612554565b5f604051808303818588803b158015610f1e575f5ffd5b505af1158015610f30573d5f5f3e3d5ffd5b50505050505b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff1603610fbe5760e0830151835183516040519081527f7be3e48a8a8b4d32138937e1809ac83481fffe48e49bb60e43ed1d3d50349e4c9060200160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610fed919061258a565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff83166110245761101f828261176c565b505050565b61101f8383836117d9565b805f03611068576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166110c157803410156110bd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6110bd73ffffffffffffffffffffffffffffffffffffffff8316333084611847565b5f73ffffffffffffffffffffffffffffffffffffffff8216156111255761112073ffffffffffffffffffffffffffffffffffffffff83163061189f565b6107af565b4792915050565b6060815f8167ffffffffffffffff81111561114957611149611ded565b604051908082528060200260200182016040528015611172578160200160208202803683370190505b5090505f805b8381101561122b578686828181106111925761119261224c565b90506020028101906111a49190612279565b6111b59060808101906060016122b5565b91506111c0826110e3565b8382815181106111d2576111d261224c565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611223573483828151811061120b5761120b61224c565b6020026020010181815161121f919061220e565b9052505b600101611178565b509095945050505050565b5f5b8181101561101f57368383838181106112535761125361224c565b90506020028101906112659190612279565b905061127760e0820160c0830161269d565b156112995761129961128f60608301604084016122b5565b826080013561102f565b50600101611238565b838383838260018114611569575f85856112bd60018561220e565b8181106112cc576112cc61224c565b90506020028101906112de9190612279565b6112ef9060808101906060016122b5565b90505f89815b8181101561149657368d8d838181106113105761131061224c565b90506020028101906113229190612279565b905061135161133760608301604084016122b5565b73ffffffffffffffffffffffffffffffffffffffff161590565b806113b357506113b361136a60408301602084016122b5565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156113ca57506113ca61136a60208301836122b5565b801561144d575061144d6113e160a08301836126b6565b6113ef916004915f9161271e565b6113f891612745565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611483576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61148d8f826118d2565b506001016112f5565b505f90505b6114a660018561220e565b811015611561575f8888838181106114c0576114c061224c565b90506020028101906114d29190612279565b6114e39060808101906060016122b5565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146115585785828151811061152a5761152a61224c565b602002602001015161153b826110e3565b611545919061220e565b9250821561155857611558818885610ffa565b5060010161149b565b505050611641565b875f5b8181101561163e57368b8b838181106115875761158761224c565b90506020028101906115999190612279565b90506115ae61133760608301604084016122b5565b806115c757506115c761136a60408301602084016122b5565b80156115de57506115de61136a60208301836122b5565b80156115f557506115f56113e160a08301836126b6565b61162b576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6116358d826118d2565b5060010161156c565b50505b50505050505050505050565b60208101515f9060e081901c806394454a5d81146116e6576332ad465f81146116f25763afd9b70681146116fe57636111ad25811461170a57631eb1cff0811461170a5763b866e173811461171657638e8d142b811461172357631c59b7fc81146116fe57639be95bb481146116f257632072197f81146116e65763f58b6de881146116f257632337e2368114611730575f9350611738565b60a48501519350611738565b60c48501519350611738565b60848501519350611738565b60e48501519350611738565b6101048501519350611738565b6101448501519350611738565b60e485015193505b505050919050565b61101f8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611b42565b73ffffffffffffffffffffffffffffffffffffffff82166117b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110bd73ffffffffffffffffffffffffffffffffffffffff831682611c6f565b73ffffffffffffffffffffffffffffffffffffffff8216611826576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61101f73ffffffffffffffffffffffffffffffffffffffff84168383611c88565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661189257637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6118e76118e260208301836122b5565b611cd1565b61191d576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361195c576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61197061133760608501604086016122b5565b61197a575f611980565b82608001355b90505f61199b61199660808601606087016122b5565b6110e3565b9050815f036119d1576119d16119b760608601604087016122b5565b6119c760408701602088016122b5565b8660800135611740565b5f806119e060208701876122b5565b73ffffffffffffffffffffffffffffffffffffffff1684611a0460a08901896126b6565b604051611a129291906127ab565b5f6040518083038185875af1925050503d805f8114611a4c576040519150601f19603f3d011682016040523d82523d5f602084013e611a51565b606091505b509150915081611a6457611a6481611d65565b5f611a786119966080890160608a016122b5565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3888611aa960208a018a6122b5565b611ab960608b0160408c016122b5565b611ac960808c0160608d016122b5565b8b60800135898711611adb5786611ae5565b611ae58a8861220e565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841615611c695773ffffffffffffffffffffffffffffffffffffffff8316611bab576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611c1e573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611c4291906127ba565b1015611c6957611c6973ffffffffffffffffffffffffffffffffffffffff85168483611d6f565b50505050565b5f385f3884865af16110bd5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611cc8576390b8ec185f526004601cfd5b5f603452505050565b6040805160178082528183019092525f9182919060208201818036833701905050905060175f60208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff0000000000000000000000000000000000000000000000000000000000821601611d5c57506023015160601c3b151592915050565b5050503b151590565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611cc8575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611cc857633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611e3e57611e3e611ded565b60405290565b5f5f67ffffffffffffffff841115611e5e57611e5e611ded565b506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f85018116603f0116810181811067ffffffffffffffff82111715611eab57611eab611ded565b604052838152905080828401851015611ec2575f5ffd5b838360208301375f60208583010152509392505050565b5f82601f830112611ee8575f5ffd5b611ef783833560208501611e44565b9392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611f21575f5ffd5b919050565b80358015158114611f21575f5ffd5b5f6101408284031215611f46575f5ffd5b611f4e611e1a565b823581529050602082013567ffffffffffffffff811115611f6d575f5ffd5b611f7984828501611ed9565b602083015250604082013567ffffffffffffffff811115611f98575f5ffd5b611fa484828501611ed9565b604083015250611fb660608301611efe565b6060820152611fc760808301611efe565b6080820152611fd860a08301611efe565b60a082015260c0828101359082015260e08083013590820152611ffe6101008301611f26565b6101008201526120116101208301611f26565b61012082015292915050565b5f6060828403121561202d575f5ffd5b6040516060810167ffffffffffffffff8111828210171561205057612050611ded565b6040528235815290508061206660208401611efe565b6020820152604083013567ffffffffffffffff811115612084575f5ffd5b8301601f81018513612094575f5ffd5b6120a385823560208401611e44565b6040830152505092915050565b5f5f5f5f606085870312156120c3575f5ffd5b843567ffffffffffffffff8111156120d9575f5ffd5b6120e587828801611f35565b945050602085013567ffffffffffffffff811115612101575f5ffd5b8501601f81018713612111575f5ffd5b803567ffffffffffffffff811115612127575f5ffd5b8760208260051b840101111561213b575f5ffd5b60209190910193509150604085013567ffffffffffffffff81111561215e575f5ffd5b61216a8782880161201d565b91505092959194509250565b5f5f60408385031215612187575f5ffd5b823567ffffffffffffffff81111561219d575f5ffd5b6121a985828601611f35565b925050602083013567ffffffffffffffff8111156121c5575f5ffd5b8301606081860312156121d6575f5ffd5b809150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b818103818111156107af576107af6121e1565b5f60208284031215612231575f5ffd5b815160ff81168114611ef7575f5ffd5b5f6107af368361201d565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126122ab575f5ffd5b9190910192915050565b5f602082840312156122c5575f5ffd5b611ef782611efe565b60ff82811682821603908111156107af576107af6121e1565b6001815b600184111561232257808504811115612306576123066121e1565b600184161561231457908102905b60019390931c9280026122eb565b935093915050565b5f82612338575060016107af565b8161234457505f6107af565b816001811461235a576002811461236457612380565b60019150506107af565b60ff841115612375576123756121e1565b50506001821b6107af565b5060208310610133831016604e8410600b84101617156123a3575081810a6107af565b6123ce7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84846122e7565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821115612400576124006121e1565b029392505050565b5f611ef760ff84168361232a565b5f82612449577f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b500490565b80820281158282048414176107af576107af6121e1565b808201808211156107af576107af6121e1565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b73ffffffffffffffffffffffffffffffffffffffff86168152846020820152835160408201526020840151606082015260ff6040850151166080820152606084015160a0820152608084015160c082015273ffffffffffffffffffffffffffffffffffffffff831660e08201526101206101008201525f612549610120830184612478565b979650505050505050565b73ffffffffffffffffffffffffffffffffffffffff83168152604060208201525f6125826040830184612478565b949350505050565b60208152815160208201525f602083015161014060408401526125b1610160840182612478565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526125ec8282612478565b9150506060840151612616608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161268561012085018215159052565b50610120840151801515610140850152509392505050565b5f602082840312156126ad575f5ffd5b611ef782611f26565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126126e9575f5ffd5b83018035915067ffffffffffffffff821115612703575f5ffd5b602001915036819003821315612717575f5ffd5b9250929050565b5f5f8585111561272c575f5ffd5b83861115612738575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156127a4577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f602082840312156127ca575f5ffd5b505191905056fea26469706673582212207891df546f932c309ccbf2683d86a5942691b31b73a1a5b8f4027bd90554311364736f6c634300081d0033";

type MayanFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MayanFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MayanFacet__factory extends ContractFactory {
  constructor(...args: MayanFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _mayan: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MayanFacet> {
    return super.deploy(_mayan, overrides || {}) as Promise<MayanFacet>;
  }
  override getDeployTransaction(
    _mayan: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_mayan, overrides || {});
  }
  override attach(address: string): MayanFacet {
    return super.attach(address) as MayanFacet;
  }
  override connect(signer: Signer): MayanFacet__factory {
    return super.connect(signer) as MayanFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MayanFacetInterface {
    return new utils.Interface(_abi) as MayanFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MayanFacet {
    return new Contract(address, _abi, signerOrProvider) as MayanFacet;
  }
}
