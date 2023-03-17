/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  GenericSwapFacet,
  GenericSwapFacetInterface,
} from "../GenericSwapFacet";

const _abi = [
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
        internalType: "bytes32",
        name: "_transactionId",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "_integrator",
        type: "string",
      },
      {
        internalType: "string",
        name: "_referrer",
        type: "string",
      },
      {
        internalType: "address payable",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_minAmount",
        type: "uint256",
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
    name: "swapTokensGeneric",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50612234806100206000396000f3fe60806040526004361061001e5760003560e01c80634630a0d814610023575b600080fd5b610036610031366004611b5e565b610038565b005b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100b3576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181558460006100c43447611c7e565b905073ffffffffffffffffffffffffffffffffffffffff8716610113576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006101228d8888888c61025d565b905060008686610133600182611c7e565b81811061014257610142611c91565b90506020028101906101549190611cc0565b610165906080810190606001611cfe565b9050610172818a846103a5565b8d7f38eee76fd911eabac79da7af16053e809be0e12c8637f156e77e1af309b995378e8e8e8e8e8d8d60008181106101ac576101ac611c91565b90506020028101906101be9190611cc0565b6101cf906060810190604001611cfe565b888f8f60008181106101e3576101e3611c91565b90506020028101906101f59190611cc0565b608001358b60405161020f99989796959493929190611d64565b60405180910390a250479050600082821161022b576000610235565b6102358383611c7e565b9050801561024957610249600085836103a5565b505060009092555050505050505050505050565b600082808203610299576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856102a8600185611c7e565b8181106102b7576102b7611c91565b90506020028101906102c99190611cc0565b6102da906080810190606001611cfe565b905060006102e7826103db565b905073ffffffffffffffffffffffffffffffffffffffff82166103115761030e3482611c7e565b90505b600061031d8888610494565b905061032988886105a0565b6103368a89898985610601565b600082610342856103db565b61034c9190611c7e565b905089811015610397576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316156103d1576103cc8383836109b3565b505050565b6103cc8282610ae8565b600073ffffffffffffffffffffffffffffffffffffffff82161561048c576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610463573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104879190611dcf565b61048e565b475b92915050565b60608160008167ffffffffffffffff8111156104b2576104b2611de8565b6040519080825280602002602001820160405280156104db578160200160208202803683370190505b5090506000805b83811015610595578686828181106104fc576104fc611c91565b905060200281019061050e9190611cc0565b61051f906080810190606001611cfe565b915061052a826103db565b83828151811061053c5761053c611c91565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661058d573483828151811061057557610575611c91565b602002602001018181516105899190611c7e565b9052505b6001016104e2565b509095945050505050565b60005b818110156103cc5760008383838181106105bf576105bf611c91565b90506020028101906105d19190611cc0565b6105da90611f44565b90508060c00151156105f8576105f881604001518260800151610c12565b506001016105a3565b8383838382600181146108ce576000858561061d600185611c7e565b81811061062c5761062c611c91565b905060200281019061063e9190611cc0565b61064f906080810190606001611cfe565b9050600089815b818110156107fa57368d8d8381811061067157610671611c91565b90506020028101906106839190611cc0565b90506106b26106986060830160408401611cfe565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061071557506107156106cb6040830160208401611cfe565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561072c575061072c6106cb6020830183611cfe565b80156107b157506107b161074360a0830183611fe9565b6107529160049160009161204e565b61075b91612078565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6107e7576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107f18f82610d88565b50600101610656565b505060005b61080a600185611c7e565b8110156108c657600088888381811061082557610825611c91565b90506020028101906108379190611cc0565b610848906080810190606001611cfe565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146108bd5785828151811061088f5761088f611c91565b60200260200101516108a0826103db565b6108aa9190611c7e565b925082156108bd576108bd8188856103a5565b506001016107ff565b5050506109a7565b8760005b818110156109a457368b8b838181106108ed576108ed611c91565b90506020028101906108ff9190611cc0565b90506109146106986060830160408401611cfe565b8061092d575061092d6106cb6040830160208401611cfe565b801561094457506109446106cb6020830183611cfe565b801561095b575061095b61074360a0830183611fe9565b610991576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61099b8d82610d88565b506001016108d2565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610a00576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610a6d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a919190611dcf565b905080821115610ad7576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161038e565b610ae284848461109e565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610b35576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610b78576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161038e565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610bd2576040519150601f19603f3d011682016040523d82523d6000602084013e610bd7565b606091505b50509050806103cc576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610c6b5780341015610c67576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b80600003610ca5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610d12573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d369190611dcf565b905081811015610d7c576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161038e565b6103cc83333085611172565b610d9e610d986020830183611cfe565b3b151590565b610dd4576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003610e14576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000610e296106986060850160408601611cfe565b610e34576000610e3a565b82608001355b90506000610e56610e516060860160408701611cfe565b6103db565b90506000610e6d610e516080870160608801611cfe565b905082600003610ea457610ea4610e8a6060870160408801611cfe565b610e9a6040880160208901611cfe565b876080013561138c565b8460800135821015610eef576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161038e565b600080610eff6020880188611cfe565b73ffffffffffffffffffffffffffffffffffffffff1685610f2360a08a018a611fe9565b604051610f319291906120c0565b60006040518083038185875af1925050503d8060008114610f6e576040519150601f19603f3d011682016040523d82523d6000602084013e610f73565b606091505b509150915081610fbe576000610f88826114d1565b9050806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161038e91906120f4565b6000610fd3610e5160808a0160608b01611cfe565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961100460208b018b611cfe565b61101460608c0160408d01611cfe565b61102460808d0160608e01611cfe565b8c608001358987116110365786611040565b6110408a88611c7e565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526103cc9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261154f565b73ffffffffffffffffffffffffffffffffffffffff84166111bf576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661120c576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa15801561127d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112a19190611dcf565b90506112af8286868661165b565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa15801561131f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113439190611dcf565b61134d9190611c7e565b14611384576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166113ac57505050565b73ffffffffffffffffffffffffffffffffffffffff82166113f9576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa15801561146f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114939190611dcf565b905081811015610ae257610ae284846114cc847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611c7e565b6116b9565b606060448251101561151657505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611532600480855161152a9190611c7e565b8591906117b7565b9050808060200190518101906115489190612145565b9392505050565b60006115b1826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166118d19092919063ffffffff16565b8051909150156103cc57808060200190518101906115cf91906121bc565b6103cc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161038e565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610ae29085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016110f0565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015611730573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117549190611dcf565b61175e91906121d9565b60405173ffffffffffffffffffffffffffffffffffffffff8516602482015260448101829052909150610ae29085907f095ea7b300000000000000000000000000000000000000000000000000000000906064016110f0565b6060816117c581601f6121d9565b10156117fd576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61180782846121d9565b84511015611841576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60608215801561186057604051915060008252602082016040526118c8565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611899578051835260209283019201611881565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b60606118e084846000856118e8565b949350505050565b60608247101561197a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161038e565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516119a391906121ec565b60006040518083038185875af1925050503d80600081146119e0576040519150601f19603f3d011682016040523d82523d6000602084013e6119e5565b606091505b50915091506119f687838387611a01565b979650505050505050565b60608315611a97578251600003611a905773ffffffffffffffffffffffffffffffffffffffff85163b611a90576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161038e565b50816118e0565b6118e08383815115611aac5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161038e91906120f4565b60008083601f840112611af257600080fd5b50813567ffffffffffffffff811115611b0a57600080fd5b602083019150836020828501011115611b2257600080fd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff81168114611b4b57600080fd5b50565b8035611b5981611b29565b919050565b600080600080600080600080600060c08a8c031215611b7c57600080fd5b8935985060208a013567ffffffffffffffff80821115611b9b57600080fd5b611ba78d838e01611ae0565b909a50985060408c0135915080821115611bc057600080fd5b611bcc8d838e01611ae0565b909850965060608c01359150611be182611b29565b90945060808b0135935060a08b01359080821115611bfe57600080fd5b818c0191508c601f830112611c1257600080fd5b813581811115611c2157600080fd5b8d60208260051b8501011115611c3657600080fd5b6020830194508093505050509295985092959850929598565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8181038181111561048e5761048e611c4f565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611cf457600080fd5b9190910192915050565b600060208284031215611d1057600080fd5b813561154881611b29565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60e081526000611d7860e083018b8d611d1b565b8281036020840152611d8b818a8c611d1b565b73ffffffffffffffffffffffffffffffffffffffff98891660408501529688166060840152505092909416608083015260a082015260c00191909152949350505050565b600060208284031215611de157600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff81118282101715611e3a57611e3a611de8565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611e8757611e87611de8565b604052919050565b600067ffffffffffffffff821115611ea957611ea9611de8565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f830112611ee657600080fd5b8135611ef9611ef482611e8f565b611e40565b818152846020838601011115611f0e57600080fd5b816020850160208301376000918101602001919091529392505050565b8015158114611b4b57600080fd5b8035611b5981611f2b565b600060e08236031215611f5657600080fd5b611f5e611e17565b611f6783611b4e565b8152611f7560208401611b4e565b6020820152611f8660408401611b4e565b6040820152611f9760608401611b4e565b60608201526080830135608082015260a083013567ffffffffffffffff811115611fc057600080fd5b611fcc36828601611ed5565b60a083015250611fde60c08401611f39565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261201e57600080fd5b83018035915067ffffffffffffffff82111561203957600080fd5b602001915036819003821315611b2257600080fd5b6000808585111561205e57600080fd5b8386111561206b57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156120b85780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60005b838110156120eb5781810151838201526020016120d3565b50506000910152565b60208152600082518060208401526121138160408501602087016120d0565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60006020828403121561215757600080fd5b815167ffffffffffffffff81111561216e57600080fd5b8201601f8101841361217f57600080fd5b805161218d611ef482611e8f565b8181528560208385010111156121a257600080fd5b6121b38260208301602086016120d0565b95945050505050565b6000602082840312156121ce57600080fd5b815161154881611f2b565b8082018082111561048e5761048e611c4f565b60008251611cf48184602087016120d056fea264697066735822122039a3d65405bb24b97a7f552850f90739c8d3b33a09d289737ba650843f5c2b6664736f6c63430008110033";

type GenericSwapFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GenericSwapFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GenericSwapFacet__factory extends ContractFactory {
  constructor(...args: GenericSwapFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GenericSwapFacet> {
    return super.deploy(overrides || {}) as Promise<GenericSwapFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): GenericSwapFacet {
    return super.attach(address) as GenericSwapFacet;
  }
  override connect(signer: Signer): GenericSwapFacet__factory {
    return super.connect(signer) as GenericSwapFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GenericSwapFacetInterface {
    return new utils.Interface(_abi) as GenericSwapFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GenericSwapFacet {
    return new Contract(address, _abi, signerOrProvider) as GenericSwapFacet;
  }
}
