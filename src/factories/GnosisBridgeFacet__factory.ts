/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  GnosisBridgeFacet,
  GnosisBridgeFacetInterface,
} from "../GnosisBridgeFacet";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_xDaiBridge",
        type: "address",
        internalType: "contract IXDaiBridge",
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
    stateMutability: "nonpayable",
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
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b506040516200269a3803806200269a833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516125ff6200009b600039600081816107d1015261084101526125ff6000f3fe6080604052600436106100295760003560e01c806302cba4a31461002e578063a9d0550f14610050575b600080fd5b34801561003a57600080fd5b5061004e61004936600461214a565b610063565b005b61004e61005e36600461217f565b610337565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100de576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155610100820151829015610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b828061012001511561015f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b836101828160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610234576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84606467ffffffffffffffff16808260e001511461027e576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86736b175474e89094c44da98b954eedeac495271d0f8073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16146102fd576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61031f736b175474e89094c44da98b954eedeac495271d0f8a60c00151610637565b610328896107b7565b50506000909555505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103b2576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103c33447612219565b905085806101000151610402576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610440576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876104638160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561049a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036104d8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610515576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b88606467ffffffffffffffff16808260e001511461055f576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a736b175474e89094c44da98b954eedeac495271d0f8073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16146105de576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105f38d600001518e60c001518e8e33610901565b60c08e01526106018d6107b7565b5050505050505060004790508181111561062a5761062a6000846106258585612219565b610a44565b5050600090915550505050565b80600003610671576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166106ca57803410156106c6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610737573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075b9190612253565b9050818110156107a6576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6107b283333085610a75565b505050565b6107fa736b175474e89094c44da98b954eedeac495271d0f7f00000000000000000000000000000000000000000000000000000000000000008360c00151610c8f565b60a081015160c08201516040517f01e4f53a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016926301e4f53a926108959260040173ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b600060405180830381600087803b1580156108af57600080fd5b505af11580156108c3573d6000803e3d6000fd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1816040516108f691906122da565b60405180910390a150565b60008280820361093d576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561094c600185612219565b81811061095b5761095b6123ed565b905060200281019061096d919061241c565b61097e90608081019060600161245a565b9050600061098b82610dd2565b905073ffffffffffffffffffffffffffffffffffffffff82166109b5576109b23482612219565b90505b60006109c18888610e8b565b90506109cd8888610f97565b6109da8a89898985611004565b6000826109e685610dd2565b6109f09190612219565b905089811015610a36576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440161079d565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831615610a6b576107b28383836113b6565b6107b28282611538565b73ffffffffffffffffffffffffffffffffffffffff8416610ac2576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610b0f576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610b80573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba49190612253565b9050610bb282868686611662565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610c22573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c469190612253565b610c509190612219565b14610c87576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610caf57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610cfc576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610d71573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d959190612253565b10156107b257610da78383600061173e565b6107b283837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61173e565b600073ffffffffffffffffffffffffffffffffffffffff821615610e83576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610e5a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e7e9190612253565b610e85565b475b92915050565b60608160008167ffffffffffffffff811115610ea957610ea9611f1c565b604051908082528060200260200182016040528015610ed2578160200160208202803683370190505b5090506000805b83811015610f8c57868682818110610ef357610ef36123ed565b9050602002810190610f05919061241c565b610f1690608081019060600161245a565b9150610f2182610dd2565b838281518110610f3357610f336123ed565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610f845734838281518110610f6c57610f6c6123ed565b60200260200101818151610f809190612219565b9052505b600101610ed9565b509095945050505050565b60005b818110156107b25736838383818110610fb557610fb56123ed565b9050602002810190610fc7919061241c565b9050610fd960e0820160c0830161247c565b15610ffb57610ffb610ff1606083016040840161245a565b8260800135610637565b50600101610f9a565b8383838382600181146112d15760008585611020600185612219565b81811061102f5761102f6123ed565b9050602002810190611041919061241c565b61105290608081019060600161245a565b9050600089815b818110156111fd57368d8d83818110611074576110746123ed565b9050602002810190611086919061241c565b90506110b561109b606083016040840161245a565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061111857506111186110ce604083016020840161245a565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561112f575061112f6110ce602083018361245a565b80156111b457506111b461114660a0830183612499565b61115591600491600091612505565b61115e9161252f565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6111ea576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111f48f826118c0565b50600101611059565b505060005b61120d600185612219565b8110156112c9576000888883818110611228576112286123ed565b905060200281019061123a919061241c565b61124b90608081019060600161245a565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146112c057858281518110611292576112926123ed565b60200260200101516112a382610dd2565b6112ad9190612219565b925082156112c0576112c0818885610a44565b50600101611202565b5050506113aa565b8760005b818110156113a757368b8b838181106112f0576112f06123ed565b9050602002810190611302919061241c565b905061131761109b606083016040840161245a565b8061133057506113306110ce604083016020840161245a565b801561134757506113476110ce602083018361245a565b801561135e575061135e61114660a0830183612499565b611394576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61139e8d826118c0565b506001016112d5565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316611403576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611450576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa1580156114bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114e19190612253565b905080821115611527576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161079d565b611532848484611b9e565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611585576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b478111156115c8576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161079d565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611622576040519150601f19603f3d011682016040523d82523d6000602084013e611627565b606091505b50509050806107b2576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526115329085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611bf4565b8015806117de57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156117b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117dc9190612253565b155b61186a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161079d565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107b29084907f095ea7b300000000000000000000000000000000000000000000000000000000906064016116bc565b6118d66118d0602083018361245a565b3b151590565b61190c576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361194c576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061196161109b606085016040860161245a565b61196c576000611972565b82608001355b9050600061198e611989606086016040870161245a565b610dd2565b905060006119a5611989608087016060880161245a565b9050826000036119dc576119dc6119c2606087016040880161245a565b6119d2604088016020890161245a565b8760800135610c8f565b8460800135821015611a27576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161079d565b600080611a37602088018861245a565b73ffffffffffffffffffffffffffffffffffffffff1685611a5b60a08a018a612499565b604051611a69929190612577565b60006040518083038185875af1925050503d8060008114611aa6576040519150601f19603f3d011682016040523d82523d6000602084013e611aab565b606091505b509150915081611abe57611abe81611d03565b6000611ad361198960808a0160608b0161245a565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611b0460208b018b61245a565b611b1460608c0160408d0161245a565b611b2460808d0160608e0161245a565b8c60800135898711611b365786611b40565b611b408a88612219565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526107b29084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016116bc565b6000611c56826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611d0d9092919063ffffffff16565b9050805160001480611c77575080806020019051810190611c779190612587565b6107b2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161079d565b8051602082018181fd5b6060611d1c8484600085611d24565b949350505050565b606082471015611db6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161079d565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611ddf91906125a4565b60006040518083038185875af1925050503d8060008114611e1c576040519150601f19603f3d011682016040523d82523d6000602084013e611e21565b606091505b5091509150611e3287838387611e3d565b979650505050505050565b60608315611ed3578251600003611ecc5773ffffffffffffffffffffffffffffffffffffffff85163b611ecc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161079d565b5081611d1c565b611d1c8383815115611ee85781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079d91906125b6565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611f6f57611f6f611f1c565b60405290565b600082601f830112611f8657600080fd5b813567ffffffffffffffff80821115611fa157611fa1611f1c565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611fe757611fe7611f1c565b8160405283815286602085880101111561200057600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461204457600080fd5b919050565b801515811461205757600080fd5b50565b803561204481612049565b6000610140828403121561207857600080fd5b612080611f4b565b905081358152602082013567ffffffffffffffff808211156120a157600080fd5b6120ad85838601611f75565b602084015260408401359150808211156120c657600080fd5b506120d384828501611f75565b6040830152506120e560608301612020565b60608201526120f660808301612020565b608082015261210760a08301612020565b60a082015260c082013560c082015260e082013560e082015261010061212e81840161205a565b9082015261012061214083820161205a565b9082015292915050565b60006020828403121561215c57600080fd5b813567ffffffffffffffff81111561217357600080fd5b611d1c84828501612065565b60008060006040848603121561219457600080fd5b833567ffffffffffffffff808211156121ac57600080fd5b6121b887838801612065565b945060208601359150808211156121ce57600080fd5b818601915086601f8301126121e257600080fd5b8135818111156121f157600080fd5b8760208260051b850101111561220657600080fd5b6020830194508093505050509250925092565b81810381811115610e85577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006020828403121561226557600080fd5b5051919050565b60005b8381101561228757818101518382015260200161226f565b50506000910152565b600081518084526122a881602086016020860161226c565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081528151602082015260006020830151610140806040850152612303610160850183612290565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261233e8382612290565b9250506060850151612368608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206123db8187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261245057600080fd5b9190910192915050565b60006020828403121561246c57600080fd5b61247582612020565b9392505050565b60006020828403121561248e57600080fd5b813561247581612049565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126124ce57600080fd5b83018035915067ffffffffffffffff8211156124e957600080fd5b6020019150368190038213156124fe57600080fd5b9250929050565b6000808585111561251557600080fd5b8386111561252257600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561256f5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60006020828403121561259957600080fd5b815161247581612049565b6000825161245081846020870161226c565b602081526000612475602083018461229056fea2646970667358221220f08a09feafeaeaf4d6bcc6b94eb2f8afdcd393dad62673f19ef8a89e2e552d3564736f6c63430008110033";

type GnosisBridgeFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GnosisBridgeFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GnosisBridgeFacet__factory extends ContractFactory {
  constructor(...args: GnosisBridgeFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _xDaiBridge: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GnosisBridgeFacet> {
    return super.deploy(
      _xDaiBridge,
      overrides || {}
    ) as Promise<GnosisBridgeFacet>;
  }
  override getDeployTransaction(
    _xDaiBridge: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_xDaiBridge, overrides || {});
  }
  override attach(address: string): GnosisBridgeFacet {
    return super.attach(address) as GnosisBridgeFacet;
  }
  override connect(signer: Signer): GnosisBridgeFacet__factory {
    return super.connect(signer) as GnosisBridgeFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GnosisBridgeFacetInterface {
    return new utils.Interface(_abi) as GnosisBridgeFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GnosisBridgeFacet {
    return new Contract(address, _abi, signerOrProvider) as GnosisBridgeFacet;
  }
}
