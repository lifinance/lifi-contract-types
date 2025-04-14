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
exports.PermitHash__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "function",
        name: "_PERMIT_BATCH_TRANSFER_FROM_TYPEHASH",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "_PERMIT_BATCH_TYPEHASH",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "_PERMIT_BATCH_WITNESS_TRANSFER_FROM_TYPEHASH_STUB",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "string",
                internalType: "string",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "_PERMIT_DETAILS_TYPEHASH",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "_PERMIT_SINGLE_TYPEHASH",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "_PERMIT_TRANSFER_FROM_TYPEHASH",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "_PERMIT_TRANSFER_FROM_WITNESS_TYPEHASH_STUB",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "string",
                internalType: "string",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "_TOKEN_PERMISSIONS_TYPEHASH",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bytes32",
                internalType: "bytes32",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "_TOKEN_PERMISSIONS_TYPESTRING",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "string",
                internalType: "string",
            },
        ],
        stateMutability: "view",
    },
];
var _bytecode = "0x6103aa610034600b8282823980515f1a607314602857634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100aa575f3560e01c806378f168301161007d57806390bbf2f31161006357806390bbf2f314610199578063c0c7fa7e146101a1578063c5df4f03146101a9575f5ffd5b806378f168301461015d57806384b8efbb14610184575f5ffd5b80633eb8b8fd146100ae578063415e982d146100e85780636302c3cf1461010f5780636e4f277514610136575b5f5ffd5b6100d57ffcf35f5ac6a2c28868dc44c302166470266239195f02b0ee408334829333b76681565b6040519081526020015b60405180910390f35b6100d57f618358ac3db8dc274f0cd8829da7e234bd48cd73c4a740aede1adec9846d06a181565b6100d57faf1b0d30d2cab0380e68f0689007e3254993c596f2fdd0aaa7f4d04f7944086381565b6100d57f65626cad6cb96493bf6f5ebea28756c966f023ab9e8a83a7101849d5573b367881565b6100d57f939c21a48a8dbe3a9a2404a1d46691e4d39f6583d6ec6b35714604c986d8010681565b61018c6101d0565b6040516100df9190610224565b61018c6101ec565b61018c610208565b6100d57ff3841cd1ff0085026a6327b620b67997ce40f282c88a8e905a7a5626e310f3d081565b6040518060a00160405280606481526020016103116064913981565b6040518060a00160405280606b8152602001610278606b913981565b6040518060600160405280602e81526020016102e3602e913981565b602081525f82518060208401528060208501604085015e5f6040828501015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168401019150509291505056fe5065726d697442617463685769746e6573735472616e7366657246726f6d28546f6b656e5065726d697373696f6e735b5d207065726d69747465642c61646472657373207370656e6465722c75696e74323536206e6f6e63652c75696e7432353620646561646c696e652c546f6b656e5065726d697373696f6e73286164647265737320746f6b656e2c75696e7432353620616d6f756e74295065726d69745769746e6573735472616e7366657246726f6d28546f6b656e5065726d697373696f6e73207065726d69747465642c61646472657373207370656e6465722c75696e74323536206e6f6e63652c75696e7432353620646561646c696e652ca2646970667358221220d7cdfc1654cd0f1c11428cc71a04e515f9eb558f3bd925c3202ee458d6a3d13d64736f6c634300081d0033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var PermitHash__factory = /** @class */ (function (_super) {
    __extends(PermitHash__factory, _super);
    function PermitHash__factory() {
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
    PermitHash__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    PermitHash__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    PermitHash__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    PermitHash__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    PermitHash__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    PermitHash__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    PermitHash__factory.bytecode = _bytecode;
    PermitHash__factory.abi = _abi;
    return PermitHash__factory;
}(ethers_1.ContractFactory));
exports.PermitHash__factory = PermitHash__factory;
