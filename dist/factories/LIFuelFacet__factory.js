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
var _bytecode = "0x608060405234801561001057600080fd5b50612815806100206000396000f3fe6080604052600436106100295760003560e01c8063552062161461002e5780639b6ee8e414610043575b600080fd5b61004161003c3660046122d5565b610056565b005b61004161005136600461236f565b610286565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e234476123d3565b905085806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561015f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101828160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610234576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024989600001518a60c001518a8a336104a8565b60c08a0152610257896105f0565b5047915050818111156102795761027960008461027485856123d3565b61083d565b5050600090915550505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610301576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061031234476123d3565b90508380610100015115610352576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610120015115610390576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856103b38160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103ea576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610428576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610465576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047787608001518860c00151610873565b610480876105f0565b50479150508181111561049d5761049d60008461027485856123d3565b505060009091555050565b6000828082036104e4576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856104f36001856123d3565b818110610502576105026123e6565b90506020028101906105149190612415565b610525906080810190606001612453565b90506000610532826109e9565b905073ffffffffffffffffffffffffffffffffffffffff821661055c5761055934826123d3565b90505b60006105688888610aa2565b90506105748888610bae565b6105818a89898985610c1b565b60008261058d856109e9565b61059791906123d3565b9050898110156105e2576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b60007fddb1a97e204589b19d70796e7a3363c86670116d11313290b7a7eb064a8f3da1604080518082018252601381527f53657276696365466565436f6c6c6563746f7200000000000000000000000000602082015290516106529190612492565b90815260405190819003602001902054608083015173ffffffffffffffffffffffffffffffffffffffff909116915061069f9073ffffffffffffffffffffffffffffffffffffffff161590565b156107415760c082015160e083015160a08401516040517fdef65669000000000000000000000000000000000000000000000000000000008152600481019290925273ffffffffffffffffffffffffffffffffffffffff908116602483015283169163def65669916044016000604051808303818588803b15801561072357600080fd5b505af1158015610737573d6000803e3d6000fd5b5050505050610802565b6107548260800151828460c00151610fcd565b608082015160c083015160e084015160a08501516040517f1eacd35f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9485166004820152602481019390935260448301919091528216606482015290821690631eacd35f90608401600060405180830381600087803b1580156107e957600080fd5b505af11580156107fd573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161083191906124ee565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83161561086957610864838383611110565b505050565b6108648282611292565b806000036108ad576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166109065780341015610902576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610973573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109979190612601565b9050818110156109dd576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105d9565b610864833330856113bc565b600073ffffffffffffffffffffffffffffffffffffffff821615610a9a576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610a71573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a959190612601565b610a9c565b475b92915050565b60608160008167ffffffffffffffff811115610ac057610ac0612067565b604051908082528060200260200182016040528015610ae9578160200160208202803683370190505b5090506000805b83811015610ba357868682818110610b0a57610b0a6123e6565b9050602002810190610b1c9190612415565b610b2d906080810190606001612453565b9150610b38826109e9565b838281518110610b4a57610b4a6123e6565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610b9b5734838281518110610b8357610b836123e6565b60200260200101818151610b9791906123d3565b9052505b600101610af0565b509095945050505050565b60005b818110156108645736838383818110610bcc57610bcc6123e6565b9050602002810190610bde9190612415565b9050610bf060e0820160c0830161261a565b15610c1257610c12610c086060830160408401612453565b8260800135610873565b50600101610bb1565b838383838260018114610ee85760008585610c376001856123d3565b818110610c4657610c466123e6565b9050602002810190610c589190612415565b610c69906080810190606001612453565b9050600089815b81811015610e1457368d8d83818110610c8b57610c8b6123e6565b9050602002810190610c9d9190612415565b9050610ccc610cb26060830160408401612453565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610d2f5750610d2f610ce56040830160208401612453565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610d465750610d46610ce56020830183612453565b8015610dcb5750610dcb610d5d60a0830183612637565b610d6c916004916000916126a3565b610d75916126cd565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610e01576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e0b8f826115e7565b50600101610c70565b505060005b610e246001856123d3565b811015610ee0576000888883818110610e3f57610e3f6123e6565b9050602002810190610e519190612415565b610e62906080810190606001612453565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ed757858281518110610ea957610ea96123e6565b6020026020010151610eba826109e9565b610ec491906123d3565b92508215610ed757610ed781888561083d565b50600101610e19565b505050610fc1565b8760005b81811015610fbe57368b8b83818110610f0757610f076123e6565b9050602002810190610f199190612415565b9050610f2e610cb26060830160408401612453565b80610f475750610f47610ce56040830160208401612453565b8015610f5e5750610f5e610ce56020830183612453565b8015610f755750610f75610d5d60a0830183612637565b610fab576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fb58d826115e7565b50600101610eec565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610fed57505050565b73ffffffffffffffffffffffffffffffffffffffff821661103a576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156110af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110d39190612601565b1015610864576110e5838360006118fd565b61086483837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6118fd565b73ffffffffffffffffffffffffffffffffffffffff831661115d576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166111aa576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611217573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061123b9190612601565b905080821115611281576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105d9565b61128c848484611afd565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166112df576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611322576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016105d9565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461137c576040519150601f19603f3d011682016040523d82523d6000602084013e611381565b606091505b5050905080610864576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611409576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611456576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156114c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114eb9190612601565b90506114f982868686611b53565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff858116600483015260009183918516906370a0823190602401602060405180830381865afa15801561156a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061158e9190612601565b61159891906123d3565b9050836115a6826001612715565b10156115de576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050505050565b6115fd6115f76020830183612453565b3b151590565b611633576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611673576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611688610cb26060850160408601612453565b611693576000611699565b82608001355b905060006116b56116b06060860160408701612453565b6109e9565b905060006116cc6116b06080870160608801612453565b905082600003611703576117036116e96060870160408801612453565b6116f96040880160208901612453565b8760800135610fcd565b846080013582101561174e576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016105d9565b60008061175e6020880188612453565b73ffffffffffffffffffffffffffffffffffffffff168561178260a08a018a612637565b604051611790929190612728565b60006040518083038185875af1925050503d80600081146117cd576040519150601f19603f3d011682016040523d82523d6000602084013e6117d2565b606091505b50915091508161181d5760006117e782611bb1565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d99190612738565b60006118326116b060808a0160608b01612453565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961186360208b018b612453565b61187360608c0160408d01612453565b61188360808d0160608e01612453565b8c60800135898711611895578661189f565b61189f8a886123d3565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b80158061199d57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611977573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061199b9190612601565b155b611a29576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016105d9565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108649084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611c2f565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108649084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611a7b565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261128c9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611a7b565b6060604482511015611bf657505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611c126004808551611c0a91906123d3565b859190611d3e565b905080806020019051810190611c28919061274b565b9392505050565b6000611c91826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611e589092919063ffffffff16565b9050805160001480611cb2575080806020019051810190611cb291906127c2565b610864576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016105d9565b606081611d4c81601f612715565b1015611d84576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611d8e8284612715565b84511015611dc8576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611de75760405191506000825260208201604052611e4f565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611e20578051835260209283019201611e08565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060611e678484600085611e6f565b949350505050565b606082471015611f01576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016105d9565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611f2a9190612492565b60006040518083038185875af1925050503d8060008114611f67576040519150601f19603f3d011682016040523d82523d6000602084013e611f6c565b606091505b5091509150611f7d87838387611f88565b979650505050505050565b6060831561201e5782516000036120175773ffffffffffffffffffffffffffffffffffffffff85163b612017576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105d9565b5081611e67565b611e6783838151156120335781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d99190612738565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156120ba576120ba612067565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561210757612107612067565b604052919050565b600067ffffffffffffffff82111561212957612129612067565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261216657600080fd5b81356121796121748261210f565b6120c0565b81815284602083860101111561218e57600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146121cf57600080fd5b919050565b80151581146121e257600080fd5b50565b80356121cf816121d4565b6000610140828403121561220357600080fd5b61220b612096565b905081358152602082013567ffffffffffffffff8082111561222c57600080fd5b61223885838601612155565b6020840152604084013591508082111561225157600080fd5b5061225e84828501612155565b604083015250612270606083016121ab565b6060820152612281608083016121ab565b608082015261229260a083016121ab565b60a082015260c082013560c082015260e082013560e08201526101006122b98184016121e5565b908201526101206122cb8382016121e5565b9082015292915050565b6000806000604084860312156122ea57600080fd5b833567ffffffffffffffff8082111561230257600080fd5b61230e878388016121f0565b9450602086013591508082111561232457600080fd5b818601915086601f83011261233857600080fd5b81358181111561234757600080fd5b8760208260051b850101111561235c57600080fd5b6020830194508093505050509250925092565b60006020828403121561238157600080fd5b813567ffffffffffffffff81111561239857600080fd5b611e67848285016121f0565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610a9c57610a9c6123a4565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261244957600080fd5b9190910192915050565b60006020828403121561246557600080fd5b611c28826121ab565b60005b83811015612489578181015183820152602001612471565b50506000910152565b6000825161244981846020870161246e565b600081518084526124bc81602086016020860161246e565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526125176101608501836124a4565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261255283826124a4565b925050606085015161257c608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125ef8187018315159052565b90950151151593019290925250919050565b60006020828403121561261357600080fd5b5051919050565b60006020828403121561262c57600080fd5b8135611c28816121d4565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261266c57600080fd5b83018035915067ffffffffffffffff82111561268757600080fd5b60200191503681900382131561269c57600080fd5b9250929050565b600080858511156126b357600080fd5b838611156126c057600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561270d5780818660040360031b1b83161692505b505092915050565b80820180821115610a9c57610a9c6123a4565b8183823760009101908152919050565b602081526000611c2860208301846124a4565b60006020828403121561275d57600080fd5b815167ffffffffffffffff81111561277457600080fd5b8201601f8101841361278557600080fd5b80516127936121748261210f565b8181528560208385010111156127a857600080fd5b6127b982602083016020860161246e565b95945050505050565b6000602082840312156127d457600080fd5b8151611c28816121d456fea2646970667358221220b6076e0d2ee0495ddffd7230c4eca485bbed0f6ab5fbc8abc607b9135661e77064736f6c63430008110033";
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
