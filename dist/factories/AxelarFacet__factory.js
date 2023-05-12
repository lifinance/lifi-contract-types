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
exports.AxelarFacet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "contract IAxelarGateway",
                name: "_gateway",
                type: "address",
            },
            {
                internalType: "contract IAxelarGasService",
                name: "_gasService",
                type: "address",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [],
        name: "InvalidAmount",
        type: "error",
    },
    {
        inputs: [],
        name: "InvalidDestinationChain",
        type: "error",
    },
    {
        inputs: [],
        name: "NativeAssetNotSupported",
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
        name: "OnlyContractOwner",
        type: "error",
    },
    {
        inputs: [],
        name: "RecoveryAddressCannotBeZero",
        type: "error",
    },
    {
        inputs: [],
        name: "ReentrancyError",
        type: "error",
    },
    {
        inputs: [],
        name: "SymbolDoesNotExist",
        type: "error",
    },
    {
        inputs: [],
        name: "TokenNotSupported",
        type: "error",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "chainID",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "string",
                name: "chainName",
                type: "string",
            },
        ],
        name: "ChainNameRegistered",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "destinationChain",
                type: "uint256",
            },
            {
                indexed: true,
                internalType: "address",
                name: "callTo",
                type: "address",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "callData",
                type: "bytes",
            },
        ],
        name: "LifiXChainTXStarted",
        type: "event",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "destinationChain",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "destinationAddress",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "callTo",
                        type: "address",
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes",
                    },
                ],
                internalType: "struct AxelarFacet.AxelarCallParameters",
                name: "params",
                type: "tuple",
            },
        ],
        name: "executeCallViaAxelar",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "destinationChain",
                        type: "uint256",
                    },
                    {
                        internalType: "address",
                        name: "destinationAddress",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "callTo",
                        type: "address",
                    },
                    {
                        internalType: "bytes",
                        name: "callData",
                        type: "bytes",
                    },
                ],
                internalType: "struct AxelarFacet.AxelarCallParameters",
                name: "params",
                type: "tuple",
            },
            {
                internalType: "address",
                name: "token",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "recoveryAddress",
                type: "address",
            },
        ],
        name: "executeCallWithTokenViaAxelar",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_chainId",
                type: "uint256",
            },
            {
                internalType: "string",
                name: "_name",
                type: "string",
            },
        ],
        name: "setChainName",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x60c06040523480156200001157600080fd5b50604051620020ef380380620020ef833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a051612009620000e6600039600081816108d20152610e4d0152600081816102cc015281816103a301528181610570015261099e01526120096000f3fe6080604052600436106100345760003560e01c806313045b0f14610039578063733499c91461004e578063aeb116de1461006e575b600080fd5b61004c610047366004611749565b610081565b005b34801561005a57600080fd5b5061004c6100693660046117b5565b61065c565b61004c61007c366004611831565b6106e0565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100fc576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815573ffffffffffffffffffffffffffffffffffffffff821661014d576040517fb897c40100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841661019a576040517f5ded599700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b826000036101d4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008473ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa158015610221573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261026791908101906118b9565b6040517f935b13f60000000000000000000000000000000000000000000000000000000081529091507fc7ba6016a551f7f07fd4821271b8773baf38cf0831912878e266bac50e0e4a9c9060009073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063935b13f6906103019086906004016119c3565b602060405180830381865afa15801561031e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034291906119d6565b905073ffffffffffffffffffffffffffffffffffffffff8116610391576040517f3dd1b30500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61039d81333089610a85565b6103c8817f000000000000000000000000000000000000000000000000000000000000000088610c9f565b5060006103db6060890160408a016119f3565b856103e960608b018b611a10565b6040516020016103fc9493929190611a7c565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181528935600090815260208590529081208054929350909161044990611acc565b80601f016020809104026020016040519081016040528092919081815260200182805461047590611acc565b80156104c25780601f10610497576101008083540402835291602001916104c2565b820191906000526020600020905b8154815290600101906020018083116104a557829003601f168201915b505050505090508051600003610504576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061051e61051960408c0160208d016119f3565b610de7565b90503415610533576105338282878b87610e10565b6040517fb541708400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063b5417084906105ad908590859088908b908f90600401611b19565b600060405180830381600087803b1580156105c757600080fd5b505af11580156105db573d6000803e3d6000fd5b506105f09250505060608b0160408c016119f3565b73ffffffffffffffffffffffffffffffffffffffff168a357f996a41bee9ee9168b98274120b734982197c51aedd142b1fb9e5fa103f25459f61063660608e018e611a10565b604051610644929190611bc2565b60405180910390a35050600090935550505050505050565b610664610ec9565b60008381527fc7ba6016a551f7f07fd4821271b8773baf38cf0831912878e266bac50e0e4a9c6020819052604090912061069f838583611c1c565b50837faee789c00c07f41c3444062965abd9376826f41fdbb884ac42b5d4bd0b26d2d384846040516106d2929190611bc2565b60405180910390a250505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161075b576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181557fc7ba6016a551f7f07fd4821271b8773baf38cf0831912878e266bac50e0e4a9c600061079260608501604086016119f3565b61079f6060860186611a10565b6040516020016107b193929190611d37565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152918152853560009081526020859052908120805492935090916107fe90611acc565b80601f016020809104026020016040519081016040528092919081815260200182805461082a90611acc565b80156108775780601f1061084c57610100808354040283529160200191610877565b820191906000526020600020905b81548152906001019060200180831161085a57829003601f168201915b5050505050905080516000036108b9576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006108ce61051960408801602089016119f3565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16630c93e3bb3430858588336040518763ffffffff1660e01b8152600401610932959493929190611d76565b6000604051808303818588803b15801561094b57600080fd5b505af115801561095f573d6000803e3d6000fd5b50506040517f1c92115f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169350631c92115f92506109da9150859085908890600401611de2565b600060405180830381600087803b1580156109f457600080fd5b505af1158015610a08573d6000803e3d6000fd5b50610a1d9250505060608701604088016119f3565b73ffffffffffffffffffffffffffffffffffffffff1686357f996a41bee9ee9168b98274120b734982197c51aedd142b1fb9e5fa103f25459f610a6360608a018a611a10565b604051610a71929190611bc2565b60405180910390a350506000909255505050565b73ffffffffffffffffffffffffffffffffffffffff8416610ad2576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610b1f576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610b90573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb49190611e25565b9050610bc282868686610f3e565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610c32573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c569190611e25565b610c609190611e6d565b14610c97576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610cbf57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610d0c576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610d81573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610da59190611e25565b1015610de257610db783836000611020565b610de283837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611020565b505050565b6060610e0a73ffffffffffffffffffffffffffffffffffffffff831660146111a7565b92915050565b6040517fc62c200200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063c62c2002903490610e909030908a908a9088908b908b903390600401611e80565b6000604051808303818588803b158015610ea957600080fd5b505af1158015610ebd573d6000803e3d6000fd5b50505050505050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610f3c576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261101a9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526113f1565b50505050565b8015806110c057506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa15801561109a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110be9190611e25565b155b611151576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084015b60405180910390fd5b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610de29084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401610f98565b606060006111b6836002611f07565b6111c1906002611f1e565b67ffffffffffffffff8111156111d9576111d9611866565b6040519080825280601f01601f191660200182016040528015611203576020820181803683370190505b5090507f30000000000000000000000000000000000000000000000000000000000000008160008151811061123a5761123a611f31565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061129d5761129d611f31565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060006112d9846002611f07565b6112e4906001611f1e565b90505b6001811115611381577f303132333435363738396162636465660000000000000000000000000000000085600f166010811061132557611325611f31565b1a60f81b82828151811061133b5761133b611f31565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c9361137a81611f60565b90506112e7565b5083156113ea576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401611148565b9392505050565b6000611453826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166114fd9092919063ffffffff16565b805190915015610de257808060200190518101906114719190611f95565b610de2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401611148565b606061150c8484600085611514565b949350505050565b6060824710156115a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401611148565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516115cf9190611fb7565b60006040518083038185875af1925050503d806000811461160c576040519150601f19603f3d011682016040523d82523d6000602084013e611611565b606091505b50915091506116228783838761162d565b979650505050505050565b606083156116c35782516000036116bc5773ffffffffffffffffffffffffffffffffffffffff85163b6116bc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401611148565b508161150c565b61150c83838151156116d85781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161114891906119c3565b60006080828403121561171e57600080fd5b50919050565b73ffffffffffffffffffffffffffffffffffffffff8116811461174657600080fd5b50565b6000806000806080858703121561175f57600080fd5b843567ffffffffffffffff81111561177657600080fd5b6117828782880161170c565b945050602085013561179381611724565b92506040850135915060608501356117aa81611724565b939692955090935050565b6000806000604084860312156117ca57600080fd5b83359250602084013567ffffffffffffffff808211156117e957600080fd5b818601915086601f8301126117fd57600080fd5b81358181111561180c57600080fd5b87602082850101111561181e57600080fd5b6020830194508093505050509250925092565b60006020828403121561184357600080fd5b813567ffffffffffffffff81111561185a57600080fd5b61150c8482850161170c565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60005b838110156118b0578181015183820152602001611898565b50506000910152565b6000602082840312156118cb57600080fd5b815167ffffffffffffffff808211156118e357600080fd5b818401915084601f8301126118f757600080fd5b81518181111561190957611909611866565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190838211818310171561194f5761194f611866565b8160405282815287602084870101111561196857600080fd5b611622836020830160208801611895565b60008151808452611991816020860160208601611895565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006113ea6020830184611979565b6000602082840312156119e857600080fd5b81516113ea81611724565b600060208284031215611a0557600080fd5b81356113ea81611724565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611a4557600080fd5b83018035915067ffffffffffffffff821115611a6057600080fd5b602001915036819003821315611a7557600080fd5b9250929050565b60007fffffffffffffffffffffffffffffffffffffffff000000000000000000000000808760601b168352808660601b166014840152508284602884013750600091016028019081529392505050565b600181811c90821680611ae057607f821691505b60208210810361171e577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60a081526000611b2c60a0830188611979565b8281036020840152611b3e8188611979565b90508281036040840152611b528187611979565b90508281036060840152611b668186611979565b9150508260808301529695505050505050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b60208152600061150c602083018486611b79565b601f821115610de257600081815260208120601f850160051c81016020861015611bfd5750805b601f850160051c820191505b81811015610c9757828155600101611c09565b67ffffffffffffffff831115611c3457611c34611866565b611c4883611c428354611acc565b83611bd6565b6000601f841160018114611c9a5760008515611c645750838201355b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b1c1916600186901b178355611d30565b6000838152602090207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0861690835b82811015611ce95786850135825560209485019460019092019101611cc9565b5086821015611d24577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008460601b168152818360148301376000910160140190815292915050565b600073ffffffffffffffffffffffffffffffffffffffff808816835260a06020840152611da660a0840188611979565b8381036040850152611db88188611979565b90508381036060850152611dcc8187611979565b9250508084166080840152509695505050505050565b606081526000611df56060830186611979565b8281036020840152611e078186611979565b90508281036040840152611e1b8185611979565b9695505050505050565b600060208284031215611e3757600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610e0a57610e0a611e3e565b600073ffffffffffffffffffffffffffffffffffffffff808a16835260e06020840152611eb060e084018a611979565b8381036040850152611ec2818a611979565b90508381036060850152611ed68189611979565b90508381036080850152611eea8188611979565b60a0850196909652509290921660c0909101525095945050505050565b8082028115828204841417610e0a57610e0a611e3e565b80820180821115610e0a57610e0a611e3e565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081611f6f57611f6f611e3e565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b600060208284031215611fa757600080fd5b815180151581146113ea57600080fd5b60008251611fc9818460208701611895565b919091019291505056fea2646970667358221220d5b7206309681fddd89999373cfb6204d2ab48b6dd1dfc66632f606c3a9187f464736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var AxelarFacet__factory = /** @class */ (function (_super) {
    __extends(AxelarFacet__factory, _super);
    function AxelarFacet__factory() {
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
    AxelarFacet__factory.prototype.deploy = function (_gateway, _gasService, overrides) {
        return _super.prototype.deploy.call(this, _gateway, _gasService, overrides || {});
    };
    AxelarFacet__factory.prototype.getDeployTransaction = function (_gateway, _gasService, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _gateway, _gasService, overrides || {});
    };
    AxelarFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    AxelarFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    AxelarFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    AxelarFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    AxelarFacet__factory.bytecode = _bytecode;
    AxelarFacet__factory.abi = _abi;
    return AxelarFacet__factory;
}(ethers_1.ContractFactory));
exports.AxelarFacet__factory = AxelarFacet__factory;
