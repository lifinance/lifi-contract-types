/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  GnosisBridgeL2Facet,
  GnosisBridgeL2FacetInterface,
} from "../GnosisBridgeL2Facet";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_xDaiBridge",
        type: "address",
        internalType: "contract IXDaiBridgeL2",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "startBridgeTokensViaXDaiBridge",
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
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "swapAndStartBridgeTokensViaXDaiBridge",
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
    name: "InvalidDestinationChain",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidReceiver",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidSendingToken",
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
  {
    type: "error",
    name: "SliceOutOfBounds",
    inputs: [],
  },
  {
    type: "error",
    name: "SliceOverflow",
    inputs: [],
  },
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b506040516200288038038062002880833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516127ec62000094600039600061063501526127ec6000f3fe6080604052600436106100295760003560e01c806302cba4a31461002e578063a9d0550f14610043575b600080fd5b61004161003c3660046122ac565b610056565b005b6100416100513660046122e1565b610313565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e234476123aa565b90508380610100015115610122576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610120015115610160576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101838160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101ba576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610235576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86600167ffffffffffffffff16808260e001511461027f576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080890151899060009073ffffffffffffffffffffffffffffffffffffffff16156102d6576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102df8b6105e6565b505050505050506000479050818111156103085761030860008461030385856123aa565b6106cd565b505060009091555050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161038e576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061039f34476123aa565b9050858061010001516103de576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561041c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8761043f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610476576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036104b4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104f1576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b88600167ffffffffffffffff16808260e001511461053b576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808b01518b9060009073ffffffffffffffffffffffffffffffffffffffff1615610592576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105a78d600001518e60c001518e8e33610703565b60c08e01526105b58d6105e6565b505050505050506000479050818111156105d9576105d960008461030385856123aa565b5050600090915550505050565b60c081015160a08201516040517f5d1e930700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201527f000000000000000000000000000000000000000000000000000000000000000090911691635d1e9307916024016000604051808303818588803b15801561067a57600080fd5b505af115801561068e573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1816040516106c2919061242b565b60405180910390a150565b73ffffffffffffffffffffffffffffffffffffffff8316156106f9576106f483838361084b565b505050565b6106f482826109cd565b60008280820361073f576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561074e6001856123aa565b81811061075d5761075d61253e565b905060200281019061076f919061256d565b6107809060808101906060016125ab565b9050600061078d82610af7565b905073ffffffffffffffffffffffffffffffffffffffff82166107b7576107b434826123aa565b90505b60006107c38888610bb0565b90506107cf8888610cbc565b6107dc8a89898985610d29565b6000826107e885610af7565b6107f291906123aa565b90508981101561083d576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610898576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166108e5576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610952573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097691906125c6565b9050808211156109bc576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610834565b6109c78484846110db565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610a1a576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610a5d576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610834565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610ab7576040519150601f19603f3d011682016040523d82523d6000602084013e610abc565b606091505b50509050806106f4576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615610ba8576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610b7f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba391906125c6565b610baa565b475b92915050565b60608160008167ffffffffffffffff811115610bce57610bce61203e565b604051908082528060200260200182016040528015610bf7578160200160208202803683370190505b5090506000805b83811015610cb157868682818110610c1857610c1861253e565b9050602002810190610c2a919061256d565b610c3b9060808101906060016125ab565b9150610c4682610af7565b838281518110610c5857610c5861253e565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610ca95734838281518110610c9157610c9161253e565b60200260200101818151610ca591906123aa565b9052505b600101610bfe565b509095945050505050565b60005b818110156106f45736838383818110610cda57610cda61253e565b9050602002810190610cec919061256d565b9050610cfe60e0820160c083016125df565b15610d2057610d20610d1660608301604084016125ab565b82608001356111af565b50600101610cbf565b838383838260018114610ff65760008585610d456001856123aa565b818110610d5457610d5461253e565b9050602002810190610d66919061256d565b610d779060808101906060016125ab565b9050600089815b81811015610f2257368d8d83818110610d9957610d9961253e565b9050602002810190610dab919061256d565b9050610dda610dc060608301604084016125ab565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610e3d5750610e3d610df360408301602084016125ab565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610e545750610e54610df360208301836125ab565b8015610ed95750610ed9610e6b60a08301836125fc565b610e7a91600491600091612668565b610e8391612692565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610f0f576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f198f82611325565b50600101610d7e565b505060005b610f326001856123aa565b811015610fee576000888883818110610f4d57610f4d61253e565b9050602002810190610f5f919061256d565b610f709060808101906060016125ab565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610fe557858281518110610fb757610fb761253e565b6020026020010151610fc882610af7565b610fd291906123aa565b92508215610fe557610fe58188856106cd565b50600101610f27565b5050506110cf565b8760005b818110156110cc57368b8b838181106110155761101561253e565b9050602002810190611027919061256d565b905061103c610dc060608301604084016125ab565b806110555750611055610df360408301602084016125ab565b801561106c575061106c610df360208301836125ab565b80156110835750611083610e6b60a08301836125fc565b6110b9576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110c38d82611325565b50600101610ffa565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106f49084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261163b565b806000036111e9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611242578034101561123e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156112af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112d391906125c6565b905081811015611319576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610834565b6106f48333308561174a565b61133b61133560208301836125ab565b3b151590565b611371576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036113b1576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006113c6610dc060608501604086016125ab565b6113d15760006113d7565b82608001355b905060006113f36113ee60608601604087016125ab565b610af7565b9050600061140a6113ee60808701606088016125ab565b9050826000036114415761144161142760608701604088016125ab565b61143760408801602089016125ab565b8760800135611974565b846080013582101561148c576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610834565b60008061149c60208801886125ab565b73ffffffffffffffffffffffffffffffffffffffff16856114c060a08a018a6125fc565b6040516114ce9291906126da565b60006040518083038185875af1925050503d806000811461150b576040519150601f19603f3d011682016040523d82523d6000602084013e611510565b606091505b50915091508161155b57600061152582611ab7565b9050806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083491906126ea565b60006115706113ee60808a0160608b016125ab565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896115a160208b018b6125ab565b6115b160608c0160408d016125ab565b6115c160808d0160608e016125ab565b8c608001358987116115d357866115dd565b6115dd8a886123aa565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b600061169d826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611b359092919063ffffffff16565b90508051600014806116be5750808060200190518101906116be91906126fd565b6106f4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610834565b73ffffffffffffffffffffffffffffffffffffffff8416611797576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166117e4576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015611855573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061187991906125c6565b905061188782868686611b4c565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff858116600483015260009183918516906370a0823190602401602060405180830381865afa1580156118f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061191c91906125c6565b61192691906123aa565b90508361193482600161271a565b1161196b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661199457505050565b73ffffffffffffffffffffffffffffffffffffffff82166119e1576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611a56573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a7a91906125c6565b10156106f457611a8c83836000611baa565b6106f483837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611baa565b6060604482511015611afc57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611b186004808551611b1091906123aa565b859190611d2c565b905080806020019051810190611b2e919061272d565b9392505050565b6060611b448484600085611e46565b949350505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526109c79085907f23b872dd000000000000000000000000000000000000000000000000000000009060840161112d565b801580611c4a57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611c24573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c4891906125c6565b155b611cd6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610834565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106f49084907f095ea7b3000000000000000000000000000000000000000000000000000000009060640161112d565b606081611d3a81601f61271a565b1015611d72576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611d7c828461271a565b84511015611db6576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611dd55760405191506000825260208201604052611e3d565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611e0e578051835260209283019201611df6565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b606082471015611ed8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610834565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611f0191906127a4565b60006040518083038185875af1925050503d8060008114611f3e576040519150601f19603f3d011682016040523d82523d6000602084013e611f43565b606091505b5091509150611f5487838387611f5f565b979650505050505050565b60608315611ff5578251600003611fee5773ffffffffffffffffffffffffffffffffffffffff85163b611fee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610834565b5081611b44565b611b44838381511561200a5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161083491906126ea565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156120915761209161203e565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156120de576120de61203e565b604052919050565b600067ffffffffffffffff8211156121005761210061203e565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261213d57600080fd5b813561215061214b826120e6565b612097565b81815284602083860101111561216557600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146121a657600080fd5b919050565b80151581146121b957600080fd5b50565b80356121a6816121ab565b600061014082840312156121da57600080fd5b6121e261206d565b905081358152602082013567ffffffffffffffff8082111561220357600080fd5b61220f8583860161212c565b6020840152604084013591508082111561222857600080fd5b506122358482850161212c565b60408301525061224760608301612182565b606082015261225860808301612182565b608082015261226960a08301612182565b60a082015260c082013560c082015260e082013560e08201526101006122908184016121bc565b908201526101206122a28382016121bc565b9082015292915050565b6000602082840312156122be57600080fd5b813567ffffffffffffffff8111156122d557600080fd5b611b44848285016121c7565b6000806000604084860312156122f657600080fd5b833567ffffffffffffffff8082111561230e57600080fd5b61231a878388016121c7565b9450602086013591508082111561233057600080fd5b818601915086601f83011261234457600080fd5b81358181111561235357600080fd5b8760208260051b850101111561236857600080fd5b6020830194508093505050509250925092565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610baa57610baa61237b565b60005b838110156123d85781810151838201526020016123c0565b50506000910152565b600081518084526123f98160208601602086016123bd565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526124546101608501836123e1565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261248f83826123e1565b92505060608501516124b9608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e085015161010081818701528087015191505061012061252c8187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126125a157600080fd5b9190910192915050565b6000602082840312156125bd57600080fd5b611b2e82612182565b6000602082840312156125d857600080fd5b5051919050565b6000602082840312156125f157600080fd5b8135611b2e816121ab565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261263157600080fd5b83018035915067ffffffffffffffff82111561264c57600080fd5b60200191503681900382131561266157600080fd5b9250929050565b6000808585111561267857600080fd5b8386111561268557600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156126d25780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611b2e60208301846123e1565b60006020828403121561270f57600080fd5b8151611b2e816121ab565b80820180821115610baa57610baa61237b565b60006020828403121561273f57600080fd5b815167ffffffffffffffff81111561275657600080fd5b8201601f8101841361276757600080fd5b805161277561214b826120e6565b81815285602083850101111561278a57600080fd5b61279b8260208301602086016123bd565b95945050505050565b600082516125a18184602087016123bd56fea26469706673582212200ffa522b92481446b28456c63a271f368f298c9472f19fbdfb65951d0b7f80aa64736f6c63430008110033";

type GnosisBridgeL2FacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GnosisBridgeL2FacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GnosisBridgeL2Facet__factory extends ContractFactory {
  constructor(...args: GnosisBridgeL2FacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _xDaiBridge: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GnosisBridgeL2Facet> {
    return super.deploy(
      _xDaiBridge,
      overrides || {}
    ) as Promise<GnosisBridgeL2Facet>;
  }
  override getDeployTransaction(
    _xDaiBridge: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_xDaiBridge, overrides || {});
  }
  override attach(address: string): GnosisBridgeL2Facet {
    return super.attach(address) as GnosisBridgeL2Facet;
  }
  override connect(signer: Signer): GnosisBridgeL2Facet__factory {
    return super.connect(signer) as GnosisBridgeL2Facet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GnosisBridgeL2FacetInterface {
    return new utils.Interface(_abi) as GnosisBridgeL2FacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GnosisBridgeL2Facet {
    return new Contract(address, _abi, signerOrProvider) as GnosisBridgeL2Facet;
  }
}
