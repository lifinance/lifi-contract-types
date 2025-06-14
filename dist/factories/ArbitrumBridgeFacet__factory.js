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
exports.ArbitrumBridgeFacet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_gatewayRouter",
                type: "address",
                internalType: "contract IGatewayRouter",
            },
            {
                name: "_inbox",
                type: "address",
                internalType: "contract IGatewayRouter",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "startBridgeTokensViaArbitrumBridge",
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
                name: "_arbitrumData",
                type: "tuple",
                internalType: "struct ArbitrumBridgeFacet.ArbitrumData",
                components: [
                    {
                        name: "maxSubmissionCost",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "maxGas",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "maxGasPrice",
                        type: "uint256",
                        internalType: "uint256",
                    },
                ],
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "swapAndStartBridgeTokensViaArbitrumBridge",
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
                name: "_arbitrumData",
                type: "tuple",
                internalType: "struct ArbitrumBridgeFacet.ArbitrumData",
                components: [
                    {
                        name: "maxSubmissionCost",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "maxGas",
                        type: "uint256",
                        internalType: "uint256",
                    },
                    {
                        name: "maxGasPrice",
                        type: "uint256",
                        internalType: "uint256",
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
        name: "InvalidReceiver",
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
        name: "NullAddrIsNotAValidSpender",
        inputs: [],
    },
    {
        type: "error",
        name: "ReentrancyError",
        inputs: [],
    },
];
var _bytecode = "0x60c060405234801561000f575f5ffd5b50604051611ffc380380611ffc83398101604081905261002e91610060565b6001600160a01b039182166080521660a052610091565b80516001600160a01b038116811461005b575f5ffd5b919050565b5f5f60408385031215610071575f5ffd5b61007a83610045565b915061008860208401610045565b90509250929050565b60805160a051611f436100b95f395f6106a101525f818161081a01526108910152611f435ff3fe608060405260043610610028575f3560e01c80633cc9517b1461002c578063c9851d0b14610041575b5f5ffd5b61003f61003a366004611994565b610054565b005b61003f61004f366004611a41565b6102a4565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df3447611aba565b90508680610100015161011e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561015c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861017f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101f3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610230576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610243604089013560208a0135611acd565b61024e908935611ae4565b90506102658b5f01518c60c001518c8c33866104e6565b60c08c01526102758b8983610680565b50479250505081811115610297576102975f846102928585611aba565b6109d8565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161031f576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61032f3447611aba565b9050848061010001511561036f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101200151156103ad576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b866103d08160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610407576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610444576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610481576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610494604089013560208a0135611acd565b61049f908935611ae4565b90506104b389608001518a60c00151610a0d565b6104be898983610680565b504792505050818111156104db576104db5f846102928585611aba565b50505f909155505050565b5f83808203610521576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f868661052f600185611aba565b81811061053e5761053e611af7565b90506020028101906105509190611b24565b610561906080810190606001611b60565b90505f61056d82610ac1565b905073ffffffffffffffffffffffffffffffffffffffff8216610597576105943482611aba565b90505b5f6105a28989610b0b565b90506105ae8989610c15565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff891660208201529081018790526105e9818b8b85610c81565b5f836105f486610ac1565b6105fe9190611aba565b905073ffffffffffffffffffffffffffffffffffffffff8516610628576106258882611aba565b90505b8b811015610670576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d90526024810182905260440160405180910390fd5b9c9b505050505050505050505050565b608083015173ffffffffffffffffffffffffffffffffffffffff166107cb577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16636e6e8a6a828560c001516106eb9190611ae4565b60a086015160c08701516040805160e086901b7fffffffff0000000000000000000000000000000000000000000000000000000016815273ffffffffffffffffffffffffffffffffffffffff90931660048401819052602484019290925287356044840152606483018290526084830191909152602087013560a483015286013560c482015261010060e48201525f6101048201526101240160206040518083038185885af11580156107a0573d5f5f3e3d5ffd5b50505050506040513d601f19601f820116820180604052508101906107c59190611b82565b5061099c565b60808301516040517fbda009fe00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff808316600483015261088f92917f00000000000000000000000000000000000000000000000000000000000000009091169063bda009fe90602401602060405180830381865afa158015610861573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108859190611b99565b8560c00151611069565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d2ce7d658285608001518660a001518760c0015187602001358860400135895f01356040516020016109099181526040602082018190525f9082015260600190565b6040516020818303038152906040526040518863ffffffff1660e01b815260040161093996959493929190611c00565b5f6040518083038185885af1158015610954573d5f5f3e3d5ffd5b50505050506040513d5f823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261099a9190810190611c68565b505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1836040516109cb9190611cdd565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff8316610a02576109fd8282611095565b505050565b6109fd838383611102565b805f03610a46576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a9f5780341015610a9b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610a9b73ffffffffffffffffffffffffffffffffffffffff8316333084611170565b5f73ffffffffffffffffffffffffffffffffffffffff821615610b0357610afe73ffffffffffffffffffffffffffffffffffffffff8316306111c8565b610b05565b475b92915050565b6060815f8167ffffffffffffffff811115610b2857610b28611716565b604051908082528060200260200182016040528015610b51578160200160208202803683370190505b5090505f805b83811015610c0a57868682818110610b7157610b71611af7565b9050602002810190610b839190611b24565b610b94906080810190606001611b60565b9150610b9f82610ac1565b838281518110610bb157610bb1611af7565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610c025734838281518110610bea57610bea611af7565b60200260200101818151610bfe9190611aba565b9052505b600101610b57565b509095945050505050565b5f5b818110156109fd5736838383818110610c3257610c32611af7565b9050602002810190610c449190611b24565b9050610c5660e0820160c08301611df0565b15610c7857610c78610c6e6060830160408401611b60565b8260800135610a0d565b50600101610c17565b602084015160408501518491849184908360018114610f83575f8686610ca8600185611aba565b818110610cb757610cb7611af7565b9050602002810190610cc99190611b24565b610cda906080810190606001611b60565b90505f89815b81811015610e8357368d8d83818110610cfb57610cfb611af7565b9050602002810190610d0d9190611b24565b9050610d3c610d226060830160408401611b60565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610d9e5750610d9e610d556040830160208401611b60565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610db55750610db5610d556020830183611b60565b8015610e385750610e38610dcc60a0830183611e09565b610dda916004915f91611e71565b610de391611e98565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610e6e576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8e51610e7a90826111fb565b50600101610ce0565b505f90505b610e93600185611aba565b811015610f7b575f898983818110610ead57610ead611af7565b9050602002810190610ebf9190611b24565b610ed0906080810190606001611b60565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610f7257868281518110610f1757610f17611af7565b6020026020010151610f2882610ac1565b610f329190611aba565b92505f73ffffffffffffffffffffffffffffffffffffffff821615610f57575f610f59565b865b90508315610f7057610f70828a6102928488611aba565b505b50600101610e88565b50505061105d565b875f5b8181101561105a57368b8b83818110610fa157610fa1611af7565b9050602002810190610fb39190611b24565b9050610fc8610d226060830160408401611b60565b80610fe15750610fe1610d556040830160208401611b60565b8015610ff85750610ff8610d556020830183611b60565b801561100f575061100f610dcc60a0830183611e09565b611045576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c5161105190826111fb565b50600101610f86565b50505b50505050505050505050565b6109fd8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61146b565b73ffffffffffffffffffffffffffffffffffffffff82166110e2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a9b73ffffffffffffffffffffffffffffffffffffffff831682611598565b73ffffffffffffffffffffffffffffffffffffffff821661114f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109fd73ffffffffffffffffffffffffffffffffffffffff841683836115b1565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166111bb57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61121061120b6020830183611b60565b6115fa565b611246576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611285576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611299610d226060850160408601611b60565b6112a3575f6112a9565b82608001355b90505f6112c46112bf6080860160608701611b60565b610ac1565b9050815f036112fa576112fa6112e06060860160408701611b60565b6112f06040870160208801611b60565b8660800135611069565b5f806113096020870187611b60565b73ffffffffffffffffffffffffffffffffffffffff168461132d60a0890189611e09565b60405161133b929190611efe565b5f6040518083038185875af1925050503d805f8114611375576040519150601f19603f3d011682016040523d82523d5f602084013e61137a565b606091505b50915091508161138d5761138d8161168e565b5f6113a16112bf6080890160608a01611b60565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886113d260208a018a611b60565b6113e260608b0160408c01611b60565b6113f260808c0160608d01611b60565b8b60800135898711611404578661140e565b61140e8a88611aba565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156115925773ffffffffffffffffffffffffffffffffffffffff83166114d4576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611547573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061156b9190611b82565b10156115925761159273ffffffffffffffffffffffffffffffffffffffff85168483611698565b50505050565b5f385f3884865af1610a9b5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166115f1576390b8ec185f526004601cfd5b5f603452505050565b6040805160178082528183019092525f9182919060208201818036833701905050905060175f60208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff000000000000000000000000000000000000000000000000000000000082160161168557506023015160601c3b151592915050565b5050503b151590565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f511417166115f1575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f511417166115f157633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561176757611767611716565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156117b4576117b4611716565b604052919050565b5f67ffffffffffffffff8211156117d5576117d5611716565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b5f82601f830112611810575f5ffd5b813561182361181e826117bc565b61176d565b818152846020838601011115611837575f5ffd5b816020850160208301375f918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611874575f5ffd5b50565b803561188281611853565b919050565b80358015158114611882575f5ffd5b5f61014082840312156118a7575f5ffd5b6118af611743565b823581529050602082013567ffffffffffffffff8111156118ce575f5ffd5b6118da84828501611801565b602083015250604082013567ffffffffffffffff8111156118f9575f5ffd5b61190584828501611801565b60408301525061191760608301611877565b606082015261192860808301611877565b608082015261193960a08301611877565b60a082015260c0828101359082015260e0808301359082015261195f6101008301611887565b6101008201526119726101208301611887565b61012082015292915050565b5f6060828403121561198e575f5ffd5b50919050565b5f5f5f5f60a085870312156119a7575f5ffd5b843567ffffffffffffffff8111156119bd575f5ffd5b6119c987828801611896565b945050602085013567ffffffffffffffff8111156119e5575f5ffd5b8501601f810187136119f5575f5ffd5b803567ffffffffffffffff811115611a0b575f5ffd5b8760208260051b8401011115611a1f575f5ffd5b60209190910193509150611a36866040870161197e565b905092959194509250565b5f5f60808385031215611a52575f5ffd5b823567ffffffffffffffff811115611a68575f5ffd5b611a7485828601611896565b925050611a84846020850161197e565b90509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610b0557610b05611a8d565b8082028115828204841417610b0557610b05611a8d565b80820180821115610b0557610b05611a8d565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611b56575f5ffd5b9190910192915050565b5f60208284031215611b70575f5ffd5b8135611b7b81611853565b9392505050565b5f60208284031215611b92575f5ffd5b5051919050565b5f60208284031215611ba9575f5ffd5b8151611b7b81611853565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b73ffffffffffffffffffffffffffffffffffffffff8716815273ffffffffffffffffffffffffffffffffffffffff8616602082015284604082015283606082015282608082015260c060a08201525f611c5c60c0830184611bb4565b98975050505050505050565b5f60208284031215611c78575f5ffd5b815167ffffffffffffffff811115611c8e575f5ffd5b8201601f81018413611c9e575f5ffd5b8051611cac61181e826117bc565b818152856020838501011115611cc0575f5ffd5b8160208401602083015e5f91810160200191909152949350505050565b60208152815160208201525f60208301516101406040840152611d04610160840182611bb4565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611d3f8282611bb4565b9150506060840151611d69608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611dd861012085018215159052565b50610120840151801515610140850152509392505050565b5f60208284031215611e00575f5ffd5b611b7b82611887565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611e3c575f5ffd5b83018035915067ffffffffffffffff821115611e56575f5ffd5b602001915036819003821315611e6a575f5ffd5b9250929050565b5f5f85851115611e7f575f5ffd5b83861115611e8b575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611ef7577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f910190815291905056fea26469706673582212201a556eac12a3d73341b33ae352c03b516cce3a2ce33bb5ab500119aca33e6f0e64736f6c634300081d0033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var ArbitrumBridgeFacet__factory = /** @class */ (function (_super) {
    __extends(ArbitrumBridgeFacet__factory, _super);
    function ArbitrumBridgeFacet__factory() {
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
    ArbitrumBridgeFacet__factory.prototype.deploy = function (_gatewayRouter, _inbox, overrides) {
        return _super.prototype.deploy.call(this, _gatewayRouter, _inbox, overrides || {});
    };
    ArbitrumBridgeFacet__factory.prototype.getDeployTransaction = function (_gatewayRouter, _inbox, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _gatewayRouter, _inbox, overrides || {});
    };
    ArbitrumBridgeFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ArbitrumBridgeFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ArbitrumBridgeFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ArbitrumBridgeFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ArbitrumBridgeFacet__factory.bytecode = _bytecode;
    ArbitrumBridgeFacet__factory.abi = _abi;
    return ArbitrumBridgeFacet__factory;
}(ethers_1.ContractFactory));
exports.ArbitrumBridgeFacet__factory = ArbitrumBridgeFacet__factory;
