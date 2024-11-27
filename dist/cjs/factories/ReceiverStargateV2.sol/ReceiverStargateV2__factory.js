"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceiverStargateV2__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_owner",
                type: "address",
                internalType: "address",
            },
            {
                name: "_executor",
                type: "address",
                internalType: "address",
            },
            {
                name: "_tokenMessaging",
                type: "address",
                internalType: "address",
            },
            {
                name: "_endpointV2",
                type: "address",
                internalType: "address",
            },
            {
                name: "_recoverGas",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "receive",
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "cancelOwnershipTransfer",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "confirmOwnershipTransfer",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "endpointV2",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "executor",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract IExecutor",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "lzCompose",
        inputs: [
            {
                name: "_from",
                type: "address",
                internalType: "address",
            },
            {
                name: "",
                type: "bytes32",
                internalType: "bytes32",
            },
            {
                name: "_message",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "",
                type: "address",
                internalType: "address",
            },
            {
                name: "",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [],
        stateMutability: "payable",
    },
    {
        type: "function",
        name: "owner",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "pendingOwner",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "pullToken",
        inputs: [
            {
                name: "assetId",
                type: "address",
                internalType: "address",
            },
            {
                name: "receiver",
                type: "address",
                internalType: "address payable",
            },
            {
                name: "amount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "recoverGas",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "tokenMessaging",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract ITokenMessaging",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "transferOwnership",
        inputs: [
            {
                name: "_newOwner",
                type: "address",
                internalType: "address",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
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
        type: "event",
        name: "OwnershipTransferRequested",
        inputs: [
            {
                name: "_from",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "_to",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "OwnershipTransferred",
        inputs: [
            {
                name: "previousOwner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "newOwner",
                type: "address",
                indexed: true,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "error",
        name: "ExternalCallFailed",
        inputs: [],
    },
    {
        type: "error",
        name: "NewOwnerMustNotBeSelf",
        inputs: [],
    },
    {
        type: "error",
        name: "NoNullOwner",
        inputs: [],
    },
    {
        type: "error",
        name: "NoPendingOwnershipTransfer",
        inputs: [],
    },
    {
        type: "error",
        name: "NotPendingOwner",
        inputs: [],
    },
    {
        type: "error",
        name: "UnAuthorized",
        inputs: [],
    },
];
const _bytecode = "0x6101006040523480156200001257600080fd5b5060405162001e3e38038062001e3e833981016040819052620000359162000089565b600080546001600160a01b0319166001600160a01b0396871617905592841660805290831660a05290911660c05260e052620000f0565b80516001600160a01b03811681146200008457600080fd5b919050565b600080600080600060a08688031215620000a257600080fd5b620000ad866200006c565b9450620000bd602087016200006c565b9350620000cd604087016200006c565b9250620000dd606087016200006c565b9150608086015190509295509295909350565b60805160a05160c05160e051611cc762000177600039600081816101b501528181610a6c01528181610bd501528181610d980152610e6101526000818161012a01526105a701526000818161028b01526106430152600081816101f701528181610baa01528181610d7001528181610dfb01528181610e370152610f770152611cc76000f3fe6080604052600436106100c05760003560e01c8063bcf225e611610074578063e30c39781161004e578063e30c39781461022c578063f2fde38b14610259578063fb214c2f1461027957600080fd5b8063bcf225e6146101a3578063c34c08e5146101e5578063d0a102601461021957600080fd5b80637200b829116100a55780637200b82914610103578063797b7f6b146101185780638da5cb5b1461017657600080fd5b806323452b9c146100cc5780632e144579146100e357600080fd5b366100c757005b600080fd5b3480156100d857600080fd5b506100e16102ad565b005b3480156100ef57600080fd5b506100e16100fe36600461156b565b610377565b34801561010f57600080fd5b506100e16104a9565b34801561012457600080fd5b5061014c7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561018257600080fd5b5060005461014c9073ffffffffffffffffffffffffffffffffffffffff1681565b3480156101af57600080fd5b506101d77f000000000000000000000000000000000000000000000000000000000000000081565b60405190815260200161016d565b3480156101f157600080fd5b5061014c7f000000000000000000000000000000000000000000000000000000000000000081565b6100e16102273660046115f5565b61058f565b34801561023857600080fd5b5060015461014c9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561026557600080fd5b506100e1610274366004611696565b6107ab565b34801561028557600080fd5b5061014c7f000000000000000000000000000000000000000000000000000000000000000081565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102fe576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1661034d576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146103c8576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166104835760008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461043d576040519150601f19603f3d011682016040523d82523d6000602084013e610442565b606091505b505090508061047d576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b6104a473ffffffffffffffffffffffffffffffffffffffff84168383610909565b505050565b60015473ffffffffffffffffffffffffffffffffffffffff163381146104fb576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146105fe576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fd8e8dbc700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff88811660048301527f0000000000000000000000000000000000000000000000000000000000000000169063d8e8dbc7906024016020604051808303816000875af115801561068c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106b091906116b3565b61ffff166000036106ed576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008773ffffffffffffffffffffffffffffffffffffffff1663fc0c546a6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561073a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075e91906116e7565b9050600080600061076f89896109dd565b8060200190518101906107829190611861565b92509250925061079e838386846107998e8e610a2a565b610a4a565b5050505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146107fc576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610849576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610898576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae127890600090a350565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526104a49084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610fa8565b60606109ec82604c81866119ee565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509293505050505b92915050565b6000610a3a602c600c84866119ee565b610a4391611a18565b9392505050565b60005a905073ffffffffffffffffffffffffffffffffffffffff8416610d53577f0000000000000000000000000000000000000000000000000000000000000000811015610b935760008373ffffffffffffffffffffffffffffffffffffffff168360405160006040518083038185875af1925050503d8060008114610aec576040519150601f19603f3d011682016040523d82523d6000602084013e610af1565b606091505b5050905080610b2c576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805173ffffffffffffffffffffffffffffffffffffffff80881682528616602082015290810184905242606082015287907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25050610fa1565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016634f91bc2b83610bfa7f000000000000000000000000000000000000000000000000000000000000000085611a83565b90898989896040518763ffffffff1660e01b8152600401610c1e9493929190611ae0565b6000604051808303818589803b158015610c3757600080fd5b5088f19450505050508015610c4a575060015b610d4e5760008373ffffffffffffffffffffffffffffffffffffffff168360405160006040518083038185875af1925050503d8060008114610ca8576040519150601f19603f3d011682016040523d82523d6000602084013e610cad565b606091505b5050905080610ce8576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805173ffffffffffffffffffffffffffffffffffffffff80881682528616602082015290810184905242606082015287907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a250610f9f565b610f9f565b83610d9673ffffffffffffffffffffffffffffffffffffffff82167f000000000000000000000000000000000000000000000000000000000000000060006110bc565b7f0000000000000000000000000000000000000000000000000000000000000000821015610ddf57610b2c73ffffffffffffffffffffffffffffffffffffffff82168585610909565b610e2073ffffffffffffffffffffffffffffffffffffffff82167f00000000000000000000000000000000000000000000000000000000000000008561123e565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016634f91bc2b610e867f000000000000000000000000000000000000000000000000000000000000000085611a83565b898989896040518663ffffffff1660e01b8152600401610ea99493929190611ae0565b600060405180830381600088803b158015610ec357600080fd5b5087f193505050508015610ed5575060015b610f5b57610efa73ffffffffffffffffffffffffffffffffffffffff82168585610909565b6040805173ffffffffffffffffffffffffffffffffffffffff80881682528616602082015290810184905242606082015287907f1fbfa988fd46deed0de12c94c7b5dcb537d51b804246d0083f245f7a8997d1709060800160405180910390a25b610f9d73ffffffffffffffffffffffffffffffffffffffff82167f000000000000000000000000000000000000000000000000000000000000000060006110bc565b505b505b5050505050565b600061100a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166113379092919063ffffffff16565b905080516000148061102b57508080602001905181019061102b9190611c1b565b6104a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b80158061115c57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611136573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061115a9190611c36565b155b6111e8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016110b3565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526104a49084907f095ea7b3000000000000000000000000000000000000000000000000000000009060640161095b565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa1580156112b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112d89190611c36565b905061047d847f095ea7b3000000000000000000000000000000000000000000000000000000008561130a8686611c4f565b60405173ffffffffffffffffffffffffffffffffffffffff9092166024830152604482015260640161095b565b6060611346848460008561134e565b949350505050565b6060824710156113e0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016110b3565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516114099190611c62565b60006040518083038185875af1925050503d8060008114611446576040519150601f19603f3d011682016040523d82523d6000602084013e61144b565b606091505b509150915061145c87838387611467565b979650505050505050565b606083156114fd5782516000036114f65773ffffffffffffffffffffffffffffffffffffffff85163b6114f6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016110b3565b5081611346565b61134683838151156115125781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110b39190611c7e565b73ffffffffffffffffffffffffffffffffffffffff8116811461156857600080fd5b50565b60008060006060848603121561158057600080fd5b833561158b81611546565b9250602084013561159b81611546565b929592945050506040919091013590565b60008083601f8401126115be57600080fd5b50813567ffffffffffffffff8111156115d657600080fd5b6020830191508360208285010111156115ee57600080fd5b9250929050565b600080600080600080600060a0888a03121561161057600080fd5b873561161b81611546565b965060208801359550604088013567ffffffffffffffff8082111561163f57600080fd5b61164b8b838c016115ac565b909750955060608a0135915061166082611546565b9093506080890135908082111561167657600080fd5b506116838a828b016115ac565b989b979a50959850939692959293505050565b6000602082840312156116a857600080fd5b8135610a4381611546565b6000602082840312156116c557600080fd5b815161ffff81168114610a4357600080fd5b80516116e281611546565b919050565b6000602082840312156116f957600080fd5b8151610a4381611546565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160e0810167ffffffffffffffff8111828210171561175657611756611704565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156117a3576117a3611704565b604052919050565b60005b838110156117c65781810151838201526020016117ae565b50506000910152565b600082601f8301126117e057600080fd5b815167ffffffffffffffff8111156117fa576117fa611704565b61182b60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8401160161175c565b81815284602083860101111561184057600080fd5b6113468260208301602087016117ab565b805180151581146116e257600080fd5b60008060006060848603121561187657600080fd5b8351925060208085015167ffffffffffffffff8082111561189657600080fd5b818701915087601f8301126118aa57600080fd5b8151818111156118bc576118bc611704565b8060051b6118cb85820161175c565b918252838101850191858101908b8411156118e557600080fd5b86860192505b838310156119cf5782518581111561190257600080fd5b860160e0818e037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe001121561193657600080fd5b61193e611733565b6119498983016116d7565b8152611957604083016116d7565b89820152611967606083016116d7565b6040820152611978608083016116d7565b606082015260a0820151608082015260c08201518781111561199a5760008081fd5b6119a88f8b838601016117cf565b60a0830152506119ba60e08301611851565b60c082015283525091860191908601906118eb565b809850505050505050506119e5604085016116d7565b90509250925092565b600080858511156119fe57600080fd5b83861115611a0b57600080fd5b5050820193919092039150565b80356020831015610a24577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b1692915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610a2457610a24611a54565b60008151808452611aae8160208601602086016117ab565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b600060808083018784526020828186015281885180845260a093508387019150838160051b880101838b0160005b83811015611bcb577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff608a84030185528151805173ffffffffffffffffffffffffffffffffffffffff9081168552878201518116888601526040808301518216908601526060808301519091169085015288810151898501528781015160e089860181905290611b9f82870182611a96565b91505060c0808301519250611bb78187018415159052565b509587019593505090850190600101611b0e565b505073ffffffffffffffffffffffffffffffffffffffff8a1660408901529550611bf6945050505050565b73ffffffffffffffffffffffffffffffffffffffff8316606083015295945050505050565b600060208284031215611c2d57600080fd5b610a4382611851565b600060208284031215611c4857600080fd5b5051919050565b80820180821115610a2457610a24611a54565b60008251611c748184602087016117ab565b9190910192915050565b602081526000610a436020830184611a9656fea26469706673582212202d0e7dec61a5f0b1d792930f570d98dd043d55cff117267defa1f558f1d6b6a864736f6c63430008110033";
const isSuperArgs = (xs) => xs.length > 1;
class ReceiverStargateV2__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_owner, _executor, _tokenMessaging, _endpointV2, _recoverGas, overrides) {
        return super.deploy(_owner, _executor, _tokenMessaging, _endpointV2, _recoverGas, overrides || {});
    }
    getDeployTransaction(_owner, _executor, _tokenMessaging, _endpointV2, _recoverGas, overrides) {
        return super.getDeployTransaction(_owner, _executor, _tokenMessaging, _endpointV2, _recoverGas, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ReceiverStargateV2__factory = ReceiverStargateV2__factory;
Object.defineProperty(ReceiverStargateV2__factory, "bytecode", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _bytecode
});
Object.defineProperty(ReceiverStargateV2__factory, "abi", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _abi
});
//# sourceMappingURL=ReceiverStargateV2__factory.js.map