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
exports.ERC721Holder__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "function",
        name: "onERC721Received",
        inputs: [
            {
                name: "",
                type: "address",
                internalType: "address",
            },
            {
                name: "",
                type: "address",
                internalType: "address",
            },
            {
                name: "",
                type: "uint256",
                internalType: "uint256",
            },
            {
                name: "",
                type: "bytes",
                internalType: "bytes",
            },
        ],
        outputs: [
            {
                name: "",
                type: "bytes4",
                internalType: "bytes4",
            },
        ],
        stateMutability: "nonpayable",
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b50610224806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063150b7a0214610030575b600080fd5b61006761003e3660046100f4565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff00000000000000000000000000000000000000000000000000000000909116815260200160405180910390f35b803573ffffffffffffffffffffffffffffffffffffffff811681146100c057600080fd5b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000806000806080858703121561010a57600080fd5b6101138561009c565b93506101216020860161009c565b925060408501359150606085013567ffffffffffffffff8082111561014557600080fd5b818701915087601f83011261015957600080fd5b81358181111561016b5761016b6100c5565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156101b1576101b16100c5565b816040528281528a60208487010111156101ca57600080fd5b8260208601602083013760006020848301015280955050505050509295919450925056fea264697066735822122085bfc3746bdff97f408799f8e74b95f16fd571dfae03488159ed01b7a934445b64736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var ERC721Holder__factory = /** @class */ (function (_super) {
    __extends(ERC721Holder__factory, _super);
    function ERC721Holder__factory() {
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
    ERC721Holder__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    ERC721Holder__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    ERC721Holder__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    ERC721Holder__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    ERC721Holder__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ERC721Holder__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ERC721Holder__factory.bytecode = _bytecode;
    ERC721Holder__factory.abi = _abi;
    return ERC721Holder__factory;
}(ethers_1.ContractFactory));
exports.ERC721Holder__factory = ERC721Holder__factory;
