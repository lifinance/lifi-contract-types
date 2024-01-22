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
exports.LIFuelFacet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "function",
        name: "startBridgeTokensViaLIFuel",
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
        name: "swapAndStartBridgeTokensViaLIFuel",
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
];
var _bytecode = "0x608060405234801561001057600080fd5b5061280b806100206000396000f3fe6080604052600436106100295760003560e01c8063552062161461002e5780639b6ee8e414610043575b600080fd5b61004161003c3660046122cb565b610056565b005b610041610051366004612365565b610286565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e234476123c9565b905085806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561015f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101828160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610234576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024989600001518a60c001518a8a336104a8565b60c08a0152610257896105f0565b5047915050818111156102795761027960008461027485856123c9565b610844565b5050600090915550505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610301576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061031234476123c9565b90508380610100015115610352576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610120015115610390576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856103b38160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103ea576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610428576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610465576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047787608001518860c0015161087a565b610480876105f0565b50479150508181111561049d5761049d60008461027485856123c9565b505060009091555050565b6000828082036104e4576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856104f36001856123c9565b818110610502576105026123dc565b9050602002810190610514919061240b565b610525906080810190606001612449565b90506000610532826109f0565b905073ffffffffffffffffffffffffffffffffffffffff821661055c5761055934826123c9565b90505b60006105688888610aa9565b90506105748888610bb5565b6105818a89898985610c22565b60008261058d856109f0565b61059791906123c9565b9050898110156105e2576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b60007fddb1a97e204589b19d70796e7a3363c86670116d11313290b7a7eb064a8f3da1604080518082018252601381527f53657276696365466565436f6c6c6563746f7200000000000000000000000000602082015290516106529190612488565b90815260405190819003602001902054608083015173ffffffffffffffffffffffffffffffffffffffff909116915061069f9073ffffffffffffffffffffffffffffffffffffffff161590565b156107485760c082015160e083015160a08401516040517f74ef98d900000000000000000000000000000000000000000000000000000000815260048101849052602481019290925273ffffffffffffffffffffffffffffffffffffffff90811660448301528316916374ef98d9916064016000604051808303818588803b15801561072a57600080fd5b505af115801561073e573d6000803e3d6000fd5b5050505050610809565b61075b8260800151828460c00151610fd4565b608082015160c083015160e084015160a08501516040517f1eacd35f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9485166004820152602481019390935260448301919091528216606482015290821690631eacd35f90608401600060405180830381600087803b1580156107f057600080fd5b505af1158015610804573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161083891906124e4565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316156108705761086b838383611117565b505050565b61086b8282611299565b806000036108b4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661090d5780341015610909576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561097a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061099e91906125f7565b9050818110156109e4576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105d9565b61086b833330856113c3565b600073ffffffffffffffffffffffffffffffffffffffff821615610aa1576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610a78573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a9c91906125f7565b610aa3565b475b92915050565b60608160008167ffffffffffffffff811115610ac757610ac761205d565b604051908082528060200260200182016040528015610af0578160200160208202803683370190505b5090506000805b83811015610baa57868682818110610b1157610b116123dc565b9050602002810190610b23919061240b565b610b34906080810190606001612449565b9150610b3f826109f0565b838281518110610b5157610b516123dc565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610ba25734838281518110610b8a57610b8a6123dc565b60200260200101818151610b9e91906123c9565b9052505b600101610af7565b509095945050505050565b60005b8181101561086b5736838383818110610bd357610bd36123dc565b9050602002810190610be5919061240b565b9050610bf760e0820160c08301612610565b15610c1957610c19610c0f6060830160408401612449565b826080013561087a565b50600101610bb8565b838383838260018114610eef5760008585610c3e6001856123c9565b818110610c4d57610c4d6123dc565b9050602002810190610c5f919061240b565b610c70906080810190606001612449565b9050600089815b81811015610e1b57368d8d83818110610c9257610c926123dc565b9050602002810190610ca4919061240b565b9050610cd3610cb96060830160408401612449565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610d365750610d36610cec6040830160208401612449565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610d4d5750610d4d610cec6020830183612449565b8015610dd25750610dd2610d6460a083018361262d565b610d7391600491600091612699565b610d7c916126c3565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610e08576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e128f826115dd565b50600101610c77565b505060005b610e2b6001856123c9565b811015610ee7576000888883818110610e4657610e466123dc565b9050602002810190610e58919061240b565b610e69906080810190606001612449565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ede57858281518110610eb057610eb06123dc565b6020026020010151610ec1826109f0565b610ecb91906123c9565b92508215610ede57610ede818885610844565b50600101610e20565b505050610fc8565b8760005b81811015610fc557368b8b83818110610f0e57610f0e6123dc565b9050602002810190610f20919061240b565b9050610f35610cb96060830160408401612449565b80610f4e5750610f4e610cec6040830160208401612449565b8015610f655750610f65610cec6020830183612449565b8015610f7c5750610f7c610d6460a083018361262d565b610fb2576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fbc8d826115dd565b50600101610ef3565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610ff457505050565b73ffffffffffffffffffffffffffffffffffffffff8216611041576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156110b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110da91906125f7565b101561086b576110ec838360006118f3565b61086b83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6118f3565b73ffffffffffffffffffffffffffffffffffffffff8316611164576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166111b1576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561121e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061124291906125f7565b905080821115611288576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105d9565b611293848484611af3565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166112e6576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611329576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016105d9565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114611383576040519150601f19603f3d011682016040523d82523d6000602084013e611388565b606091505b505090508061086b576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611410576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661145d576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156114ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114f291906125f7565b905061150082868686611b49565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611570573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061159491906125f7565b61159e91906123c9565b146115d5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6115f36115ed6020830183612449565b3b151590565b611629576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611669576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061167e610cb96060850160408601612449565b61168957600061168f565b82608001355b905060006116ab6116a66060860160408701612449565b6109f0565b905060006116c26116a66080870160608801612449565b9050826000036116f9576116f96116df6060870160408801612449565b6116ef6040880160208901612449565b8760800135610fd4565b8460800135821015611744576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016105d9565b6000806117546020880188612449565b73ffffffffffffffffffffffffffffffffffffffff168561177860a08a018a61262d565b60405161178692919061270b565b60006040518083038185875af1925050503d80600081146117c3576040519150601f19603f3d011682016040523d82523d6000602084013e6117c8565b606091505b5091509150816118135760006117dd82611ba7565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d9919061271b565b60006118286116a660808a0160608b01612449565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961185960208b018b612449565b61186960608c0160408d01612449565b61187960808d0160608e01612449565b8c6080013589871161188b5786611895565b6118958a886123c9565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b80158061199357506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa15801561196d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061199191906125f7565b155b611a1f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016105d9565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261086b9084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611c25565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261086b9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611a71565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526112939085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611a71565b6060604482511015611bec57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611c086004808551611c0091906123c9565b859190611d34565b905080806020019051810190611c1e919061272e565b9392505050565b6000611c87826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611e4e9092919063ffffffff16565b9050805160001480611ca8575080806020019051810190611ca891906127a5565b61086b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016105d9565b606081611d4281601f6127c2565b1015611d7a576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611d8482846127c2565b84511015611dbe576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611ddd5760405191506000825260208201604052611e45565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611e16578051835260209283019201611dfe565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060611e5d8484600085611e65565b949350505050565b606082471015611ef7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016105d9565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611f209190612488565b60006040518083038185875af1925050503d8060008114611f5d576040519150601f19603f3d011682016040523d82523d6000602084013e611f62565b606091505b5091509150611f7387838387611f7e565b979650505050505050565b6060831561201457825160000361200d5773ffffffffffffffffffffffffffffffffffffffff85163b61200d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105d9565b5081611e5d565b611e5d83838151156120295781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d9919061271b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156120b0576120b061205d565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156120fd576120fd61205d565b604052919050565b600067ffffffffffffffff82111561211f5761211f61205d565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261215c57600080fd5b813561216f61216a82612105565b6120b6565b81815284602083860101111561218457600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146121c557600080fd5b919050565b80151581146121d857600080fd5b50565b80356121c5816121ca565b600061014082840312156121f957600080fd5b61220161208c565b905081358152602082013567ffffffffffffffff8082111561222257600080fd5b61222e8583860161214b565b6020840152604084013591508082111561224757600080fd5b506122548482850161214b565b604083015250612266606083016121a1565b6060820152612277608083016121a1565b608082015261228860a083016121a1565b60a082015260c082013560c082015260e082013560e08201526101006122af8184016121db565b908201526101206122c18382016121db565b9082015292915050565b6000806000604084860312156122e057600080fd5b833567ffffffffffffffff808211156122f857600080fd5b612304878388016121e6565b9450602086013591508082111561231a57600080fd5b818601915086601f83011261232e57600080fd5b81358181111561233d57600080fd5b8760208260051b850101111561235257600080fd5b6020830194508093505050509250925092565b60006020828403121561237757600080fd5b813567ffffffffffffffff81111561238e57600080fd5b611e5d848285016121e6565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610aa357610aa361239a565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261243f57600080fd5b9190910192915050565b60006020828403121561245b57600080fd5b611c1e826121a1565b60005b8381101561247f578181015183820152602001612467565b50506000910152565b6000825161243f818460208701612464565b600081518084526124b2816020860160208601612464565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261250d61016085018361249a565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152612548838261249a565b9250506060850151612572608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125e58187018315159052565b90950151151593019290925250919050565b60006020828403121561260957600080fd5b5051919050565b60006020828403121561262257600080fd5b8135611c1e816121ca565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261266257600080fd5b83018035915067ffffffffffffffff82111561267d57600080fd5b60200191503681900382131561269257600080fd5b9250929050565b600080858511156126a957600080fd5b838611156126b657600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156127035780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611c1e602083018461249a565b60006020828403121561274057600080fd5b815167ffffffffffffffff81111561275757600080fd5b8201601f8101841361276857600080fd5b805161277661216a82612105565b81815285602083850101111561278b57600080fd5b61279c826020830160208601612464565b95945050505050565b6000602082840312156127b757600080fd5b8151611c1e816121ca565b80820180821115610aa357610aa361239a56fea2646970667358221220f4c03ad795c0c5806770a9d0c2507cd5c36a8b20f7e0abc078ccb5e723ddba8964736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var LIFuelFacet__factory = /** @class */ (function (_super) {
    __extends(LIFuelFacet__factory, _super);
    function LIFuelFacet__factory() {
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
    LIFuelFacet__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    LIFuelFacet__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    LIFuelFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    LIFuelFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    LIFuelFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    LIFuelFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    LIFuelFacet__factory.bytecode = _bytecode;
    LIFuelFacet__factory.abi = _abi;
    return LIFuelFacet__factory;
}(ethers_1.ContractFactory));
exports.LIFuelFacet__factory = LIFuelFacet__factory;
