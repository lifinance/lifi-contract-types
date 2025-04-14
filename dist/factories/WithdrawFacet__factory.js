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
exports.WithdrawFacet__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "function",
        name: "executeCallAndWithdraw",
        inputs: [
            {
                name: "_callTo",
                type: "address",
                internalType: "address payable",
            },
            {
                name: "_callData",
                type: "bytes",
                internalType: "bytes",
            },
            {
                name: "_assetAddress",
                type: "address",
                internalType: "address",
            },
            {
                name: "_to",
                type: "address",
                internalType: "address",
            },
            {
                name: "_amount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "withdraw",
        inputs: [
            {
                name: "_assetAddress",
                type: "address",
                internalType: "address",
            },
            {
                name: "_to",
                type: "address",
                internalType: "address",
            },
            {
                name: "_amount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "event",
        name: "LogWithdraw",
        inputs: [
            {
                name: "_assetAddress",
                type: "address",
                indexed: true,
                internalType: "address",
            },
            {
                name: "_to",
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
        ],
        anonymous: false,
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
        name: "NativeAssetTransferFailed",
        inputs: [],
    },
    {
        type: "error",
        name: "NoTransferToNullAddress",
        inputs: [],
    },
    {
        type: "error",
        name: "NotAContract",
        inputs: [],
    },
    {
        type: "error",
        name: "NullAddrIsNotAnERC20Token",
        inputs: [],
    },
    {
        type: "error",
        name: "UnAuthorized",
        inputs: [],
    },
    {
        type: "error",
        name: "WithdrawFailed",
        inputs: [],
    },
];
var _bytecode = "0x6080604052348015600e575f5ffd5b50610b7d8061001c5f395ff3fe608060405234801561000f575f5ffd5b5060043610610034575f3560e01c80631458d7ad14610038578063d9caed121461004d575b5f5ffd5b61004b6100463660046109a9565b610060565b005b61004b61005b366004610a54565b61019e565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146100a6576100a66101f4565b5f863b1515806100e2576040517f09ee12d500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8773ffffffffffffffffffffffffffffffffffffffff168787604051610109929190610a92565b5f604051808303815f865af19150503d805f8114610142576040519150601f19603f3d011682016040523d82523d5f602084013e610147565b606091505b509092505081156101625761015d858585610293565b610194565b6040517f750b219c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205473ffffffffffffffffffffffffffffffffffffffff1633146101e4576101e46101f4565b6101ef838383610293565b505050565b5f80357fffffffff000000000000000000000000000000000000000000000000000000001681527fdf05114fe8fad5d7cd2d71c5651effc2a4c21f13ee8b4a462e2a3bd4e140c73e6020818152604080842033855290915290912054600160ff909116151514610290576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50565b5f73ffffffffffffffffffffffffffffffffffffffff8316156102b657826102b8565b335b90506102c584828461031e565b6040805173ffffffffffffffffffffffffffffffffffffffff8381168252602082018590528616917f9207361cc2a04b9c7a06691df1eb87c6a63957ae88bf01d0d18c81e3d1272099910160405180910390a250505050565b73ffffffffffffffffffffffffffffffffffffffff831615610345576101ef83838361034f565b6101ef82826104d3565b73ffffffffffffffffffffffffffffffffffffffff831661039c576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166103e9576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f9073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610453573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104779190610aa1565b9050808211156104c2576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6104cd8484846105f9565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610520576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610563576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016104b9565b5f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f81146105b9576040519150601f19603f3d011682016040523d82523d5f602084013e6105be565b606091505b50509050806101ef576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805173ffffffffffffffffffffffffffffffffffffffff848116602483015260448083018590528351808403909101815260649092018352602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564908401526101ef928692915f916106c391851690849061076f565b905080515f14806106e35750808060200190518101906106e39190610ab8565b6101ef576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016104b9565b606061077d84845f85610785565b949350505050565b606082471015610817576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016104b9565b5f5f8673ffffffffffffffffffffffffffffffffffffffff16858760405161083f9190610ade565b5f6040518083038185875af1925050503d805f8114610879576040519150601f19603f3d011682016040523d82523d5f602084013e61087e565b606091505b509150915061088f8783838761089a565b979650505050505050565b6060831561092f5782515f036109285773ffffffffffffffffffffffffffffffffffffffff85163b610928576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016104b9565b508161077d565b61077d83838151156109445781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104b99190610af4565b73ffffffffffffffffffffffffffffffffffffffff81168114610290575f5ffd5b80356109a481610978565b919050565b5f5f5f5f5f5f60a087890312156109be575f5ffd5b86356109c981610978565b9550602087013567ffffffffffffffff8111156109e4575f5ffd5b8701601f810189136109f4575f5ffd5b803567ffffffffffffffff811115610a0a575f5ffd5b896020828401011115610a1b575f5ffd5b60209190910195509350610a3160408801610999565b9250610a3f60608801610999565b95989497509295919493608090920135925050565b5f5f5f60608486031215610a66575f5ffd5b8335610a7181610978565b92506020840135610a8181610978565b929592945050506040919091013590565b818382375f9101908152919050565b5f60208284031215610ab1575f5ffd5b5051919050565b5f60208284031215610ac8575f5ffd5b81518015158114610ad7575f5ffd5b9392505050565b5f82518060208501845e5f920191825250919050565b602081525f82518060208401528060208501604085015e5f6040828501015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168401019150509291505056fea2646970667358221220fe09819a6281fc88fbcca0860d5d6e634c22699e0536b8fccb80846314787aa164736f6c634300081d0033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var WithdrawFacet__factory = /** @class */ (function (_super) {
    __extends(WithdrawFacet__factory, _super);
    function WithdrawFacet__factory() {
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
    WithdrawFacet__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    WithdrawFacet__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    WithdrawFacet__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    WithdrawFacet__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    WithdrawFacet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    WithdrawFacet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    WithdrawFacet__factory.bytecode = _bytecode;
    WithdrawFacet__factory.abi = _abi;
    return WithdrawFacet__factory;
}(ethers_1.ContractFactory));
exports.WithdrawFacet__factory = WithdrawFacet__factory;
