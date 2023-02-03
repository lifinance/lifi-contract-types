"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestGnosisBridgeFacet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "contract IXDaiBridge",
                name: "_xDaiBridge",
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
        name: "InvalidDestinationChain",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidReceiver",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidSendingToken",
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
        ],
        name: "startBridgeTokensViaXDaiBridge",
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
        name: "swapAndStartBridgeTokensViaXDaiBridge",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
];
var _bytecode = "0x60a06040523480156200001157600080fd5b5060405162002c7438038062002c74833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612bd96200009b600039600081816109920152610a020152612bd96000f3fe60806040526004361061003f5760003560e01c806302cba4a314610044578063536db26614610059578063a9d0550f14610079578063c561c1481461008c575b600080fd5b6100576100523660046125cf565b6100ac565b005b34801561006557600080fd5b50610057610074366004612604565b6103c5565b61005761008736600461261f565b6103d1565b34801561009857600080fd5b506100576100a73660046126b9565b61077a565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610127576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155336000610138344761272a565b90508380610100015115610178576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84806101200151156101b6576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856101d98160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610210576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361024e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361028b576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86606467ffffffffffffffff16808260e00151146102d5576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b88736b175474e89094c44da98b954eedeac495271d0f8073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff1614610354576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610376736b175474e89094c44da98b954eedeac495271d0f8c60c001516107f8565b61037f8b610978565b505050505050506000479050600082821161039b5760006103a5565b6103a5838361272a565b905080156103b9576103b960008583610ac2565b50506000909255505050565b6103ce81610af3565b50565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161044c576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155610100840151849061048e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84806101200151156104cc576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856104ef8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610526576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610564576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036105a1576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86606467ffffffffffffffff16808260e00151146105eb576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b88736b175474e89094c44da98b954eedeac495271d0f8073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff161461066a576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008990036106a5576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b736b175474e89094c44da98b954eedeac495271d0f8a8a6106c760018261272a565b8181106106d6576106d661273d565b90506020028101906106e8919061276c565b6106f9906080810190606001612604565b73ffffffffffffffffffffffffffffffffffffffff1614610746576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61075b8b600001518c60c001518c8c33610be0565b60c08c01526107698b610978565b505060009095555050505050505050565b6103ce817fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b73ffffffffffffffffffffffffffffffffffffffff8216610851578034101561084d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b8060000361088b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156108f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091c91906127aa565b905081811015610967576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61097383333085610d23565b505050565b6109bb736b175474e89094c44da98b954eedeac495271d0f7f00000000000000000000000000000000000000000000000000000000000000008360c00151610f3d565b60a081015160c08201516040517f01e4f53a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016926301e4f53a92610a569260040173ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b600060405180830381600087803b158015610a7057600080fd5b505af1158015610a84573d6000803e3d6000fd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f181604051610ab79190612831565b60405180910390a150565b73ffffffffffffffffffffffffffffffffffffffff831615610ae957610973838383611088565b61097382826111b7565b610afc816112e1565b73ffffffffffffffffffffffffffffffffffffffff811660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602081905260409091205460ff1615610b50575050565b73ffffffffffffffffffffffffffffffffffffffff909116600081815260208381526040822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660019081179091556002909401805494850181558252902090910180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169091179055565b600082808203610c1c576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610c2b60018561272a565b818110610c3a57610c3a61273d565b9050602002810190610c4c919061276c565b610c5d906080810190606001612604565b90506000610c6a8261137f565b905073ffffffffffffffffffffffffffffffffffffffff8216610c9457610c91348261272a565b90505b6000610ca08888611438565b9050610cac8888611544565b610cb98a898989856115a5565b600082610cc58561137f565b610ccf919061272a565b905089811015610d15576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440161095e565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610d70576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610dbd576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610e2e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e5291906127aa565b9050610e6082868686611957565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610ed0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ef491906127aa565b610efe919061272a565b14610f35576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610f5d57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610faa576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015611020573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061104491906127aa565b90508181101561108257611082848461107d847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61272a565b611a33565b50505050565b73ffffffffffffffffffffffffffffffffffffffff83166110d5576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611142573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061116691906127aa565b9050808211156111ac576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161095e565b611082848484611b31565b73ffffffffffffffffffffffffffffffffffffffff8216611204576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611247576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161095e565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146112a1576040519150601f19603f3d011682016040523d82523d6000602084013e6112a6565b606091505b5050905080610973576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811661132e576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff163b6000036103ce576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615611430576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015611407573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061142b91906127aa565b611432565b475b92915050565b60608160008167ffffffffffffffff81111561145657611456612341565b60405190808252806020026020018201604052801561147f578160200160208202803683370190505b5090506000805b83811015611539578686828181106114a0576114a061273d565b90506020028101906114b2919061276c565b6114c3906080810190606001612604565b91506114ce8261137f565b8382815181106114e0576114e061273d565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661153157348382815181106115195761151961273d565b6020026020010181815161152d919061272a565b9052505b600101611486565b509095945050505050565b60005b818110156109735760008383838181106115635761156361273d565b9050602002810190611575919061276c565b61157e90612944565b90508060c001511561159c5761159c816040015182608001516107f8565b50600101611547565b83838383826001811461187257600085856115c160018561272a565b8181106115d0576115d061273d565b90506020028101906115e2919061276c565b6115f3906080810190606001612604565b9050600089815b8181101561179e57368d8d838181106116155761161561273d565b9050602002810190611627919061276c565b905061165661163c6060830160408401612604565b73ffffffffffffffffffffffffffffffffffffffff161590565b806116b957506116b961166f6040830160208401612604565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156116d057506116d061166f6020830183612604565b801561175557506117556116e760a08301836129e9565b6116f691600491600091612a55565b6116ff91612a7f565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61178b576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6117958f82611b87565b506001016115fa565b505060005b6117ae60018561272a565b81101561186a5760008888838181106117c9576117c961273d565b90506020028101906117db919061276c565b6117ec906080810190606001612604565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611861578582815181106118335761183361273d565b60200260200101516118448261137f565b61184e919061272a565b9250821561186157611861818885610ac2565b506001016117a3565b50505061194b565b8760005b8181101561194857368b8b838181106118915761189161273d565b90506020028101906118a3919061276c565b90506118b861163c6060830160408401612604565b806118d157506118d161166f6040830160208401612604565b80156118e857506118e861166f6020830183612604565b80156118ff57506118ff6116e760a08301836129e9565b611935576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61193f8d82611b87565b50600101611876565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526110829085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611e9d565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015611aaa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ace91906127aa565b611ad89190612ac7565b60405173ffffffffffffffffffffffffffffffffffffffff85166024820152604481018290529091506110829085907f095ea7b300000000000000000000000000000000000000000000000000000000906064016119b1565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526109739084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064016119b1565b611b9d611b976020830183612604565b3b151590565b611bd3576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611c13576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611c2861163c6060850160408601612604565b611c33576000611c39565b82608001355b90506000611c55611c506060860160408701612604565b61137f565b90506000611c6c611c506080870160608801612604565b905082600003611ca357611ca3611c896060870160408801612604565b611c996040880160208901612604565b8760800135610f3d565b8460800135821015611cee576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161095e565b600080611cfe6020880188612604565b73ffffffffffffffffffffffffffffffffffffffff1685611d2260a08a018a6129e9565b604051611d30929190612ada565b60006040518083038185875af1925050503d8060008114611d6d576040519150601f19603f3d011682016040523d82523d6000602084013e611d72565b606091505b509150915081611dbd576000611d8782611fa9565b9050806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095e9190612aea565b6000611dd2611c5060808a0160608b01612604565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611e0360208b018b612604565b611e1360608c0160408d01612604565b611e2360808d0160608e01612604565b8c60800135898711611e355786611e3f565b611e3f8a8861272a565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611eff826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166120279092919063ffffffff16565b8051909150156109735780806020019051810190611f1d9190612afd565b610973576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161095e565b6060604482511015611fee57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b600061200a6004808551612002919061272a565b85919061203e565b9050808060200190518101906120209190612b1a565b9392505050565b60606120368484600085612158565b949350505050565b60608161204c81601f612ac7565b1015612084576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61208e8284612ac7565b845110156120c8576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6060821580156120e7576040519150600082526020820160405261214f565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015612120578051835260209283019201612108565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060824710156121ea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161095e565b73ffffffffffffffffffffffffffffffffffffffff85163b612268576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161095e565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516122919190612b91565b60006040518083038185875af1925050503d80600081146122ce576040519150601f19603f3d011682016040523d82523d6000602084013e6122d3565b606091505b50915091506122e38282866122ee565b979650505050505050565b606083156122fd575081612020565b82511561230d5782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095e9190612aea565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561239457612394612341565b60405290565b60405160e0810167ffffffffffffffff8111828210171561239457612394612341565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561240457612404612341565b604052919050565b600067ffffffffffffffff82111561242657612426612341565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261246357600080fd5b81356124766124718261240c565b6123bd565b81815284602083860101111561248b57600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146124cc57600080fd5b919050565b80151581146103ce57600080fd5b80356124cc816124d1565b600061014082840312156124fd57600080fd5b612505612370565b905081358152602082013567ffffffffffffffff8082111561252657600080fd5b61253285838601612452565b6020840152604084013591508082111561254b57600080fd5b5061255884828501612452565b60408301525061256a606083016124a8565b606082015261257b608083016124a8565b608082015261258c60a083016124a8565b60a082015260c082013560c082015260e082013560e08201526101006125b38184016124df565b908201526101206125c58382016124df565b9082015292915050565b6000602082840312156125e157600080fd5b813567ffffffffffffffff8111156125f857600080fd5b612036848285016124ea565b60006020828403121561261657600080fd5b612020826124a8565b60008060006040848603121561263457600080fd5b833567ffffffffffffffff8082111561264c57600080fd5b612658878388016124ea565b9450602086013591508082111561266e57600080fd5b818601915086601f83011261268257600080fd5b81358181111561269157600080fd5b8760208260051b85010111156126a657600080fd5b6020830194508093505050509250925092565b6000602082840312156126cb57600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461202057600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115611432576114326126fb565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126127a057600080fd5b9190910192915050565b6000602082840312156127bc57600080fd5b5051919050565b60005b838110156127de5781810151838201526020016127c6565b50506000910152565b600081518084526127ff8160208601602086016127c3565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261285a6101608501836127e7565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261289583826127e7565b92505060608501516128bf608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206129328187018315159052565b90950151151593019290925250919050565b600060e0823603121561295657600080fd5b61295e61239a565b612967836124a8565b8152612975602084016124a8565b6020820152612986604084016124a8565b6040820152612997606084016124a8565b60608201526080830135608082015260a083013567ffffffffffffffff8111156129c057600080fd5b6129cc36828601612452565b60a0830152506129de60c084016124df565b60c082015292915050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612a1e57600080fd5b83018035915067ffffffffffffffff821115612a3957600080fd5b602001915036819003821315612a4e57600080fd5b9250929050565b60008085851115612a6557600080fd5b83861115612a7257600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015612abf5780818660040360031b1b83161692505b505092915050565b80820180821115611432576114326126fb565b8183823760009101908152919050565b60208152600061202060208301846127e7565b600060208284031215612b0f57600080fd5b8151612020816124d1565b600060208284031215612b2c57600080fd5b815167ffffffffffffffff811115612b4357600080fd5b8201601f81018413612b5457600080fd5b8051612b626124718261240c565b818152856020838501011115612b7757600080fd5b612b888260208301602086016127c3565b95945050505050565b600082516127a08184602087016127c356fea2646970667358221220f266ba9367162c4f3b8c08312b17972be4d4178fcc8d0de8ac1e1907388ae4ff64736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var TestGnosisBridgeFacet__factory = /** @class */ (function (_super) {
    __extends(TestGnosisBridgeFacet__factory, _super);
    function TestGnosisBridgeFacet__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (isSuperArgs(args)) {
            _this = _super.apply(this, args) || this;
        }
        else {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        return _this;
    }
    TestGnosisBridgeFacet__factory.prototype.deploy = function (_xDaiBridge, overrides) {
        return _super.prototype.deploy.call(this, _xDaiBridge, overrides || {});
    };
    TestGnosisBridgeFacet__factory.prototype.getDeployTransaction = function (_xDaiBridge, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _xDaiBridge, overrides || {});
    };
    TestGnosisBridgeFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    TestGnosisBridgeFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    TestGnosisBridgeFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    TestGnosisBridgeFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    TestGnosisBridgeFacet__factory.bytecode = _bytecode;
    TestGnosisBridgeFacet__factory.abi = _abi;
    return TestGnosisBridgeFacet__factory;
}(ethers_1.ContractFactory));
exports.TestGnosisBridgeFacet__factory = TestGnosisBridgeFacet__factory;
