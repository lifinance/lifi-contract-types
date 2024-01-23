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
exports.DSTest__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "function",
        name: "IS_TEST",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "failed",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "bool",
                internalType: "bool",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "event",
        name: "log",
        inputs: [
            {
                name: "",
                type: "string",
                indexed: false,
                internalType: "string",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_address",
        inputs: [
            {
                name: "",
                type: "address",
                indexed: false,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_bytes",
        inputs: [
            {
                name: "",
                type: "bytes",
                indexed: false,
                internalType: "bytes",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_bytes32",
        inputs: [
            {
                name: "",
                type: "bytes32",
                indexed: false,
                internalType: "bytes32",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_int",
        inputs: [
            {
                name: "",
                type: "int256",
                indexed: false,
                internalType: "int256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_named_address",
        inputs: [
            {
                name: "key",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "val",
                type: "address",
                indexed: false,
                internalType: "address",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_named_bytes",
        inputs: [
            {
                name: "key",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "val",
                type: "bytes",
                indexed: false,
                internalType: "bytes",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_named_bytes32",
        inputs: [
            {
                name: "key",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "val",
                type: "bytes32",
                indexed: false,
                internalType: "bytes32",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_named_decimal_int",
        inputs: [
            {
                name: "key",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "val",
                type: "int256",
                indexed: false,
                internalType: "int256",
            },
            {
                name: "decimals",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_named_decimal_uint",
        inputs: [
            {
                name: "key",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "val",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
            {
                name: "decimals",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_named_int",
        inputs: [
            {
                name: "key",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "val",
                type: "int256",
                indexed: false,
                internalType: "int256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_named_string",
        inputs: [
            {
                name: "key",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "val",
                type: "string",
                indexed: false,
                internalType: "string",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_named_uint",
        inputs: [
            {
                name: "key",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "val",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_string",
        inputs: [
            {
                name: "",
                type: "string",
                indexed: false,
                internalType: "string",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_uint",
        inputs: [
            {
                name: "",
                type: "uint256",
                indexed: false,
                internalType: "uint256",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "logs",
        inputs: [
            {
                name: "",
                type: "bytes",
                indexed: false,
                internalType: "bytes",
            },
        ],
        anonymous: false,
    },
];
var _bytecode = "0x60806040526000805460ff1916600117905534801561001d57600080fd5b5061029b8061002d6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063ba414fa61461003b578063fa7626d414610057575b600080fd5b610043610064565b604051901515815260200160405180910390f35b6000546100439060ff1681565b60008054610100900460ff16156100845750600054610100900460ff1690565b6000737109709ecfa91a80626ff3989d68f67f5b1dd12d3b156101bf5760408051737109709ecfa91a80626ff3989d68f67f5b1dd12d602082018190527f6661696c6564000000000000000000000000000000000000000000000000000082840152825180830384018152606083019093526000929091610129917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc4916080016101f4565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905261016191610230565b6000604051808303816000865af19150503d806000811461019e576040519150601f19603f3d011682016040523d82523d6000602084013e6101a3565b606091505b50915050808060200190518101906101bb9190610243565b9150505b919050565b6000815160005b818110156101e557602081850181015186830152016101cb565b50600093019283525090919050565b7fffffffff0000000000000000000000000000000000000000000000000000000083168152600061022860048301846101c4565b949350505050565b600061023c82846101c4565b9392505050565b60006020828403121561025557600080fd5b8151801515811461023c57600080fdfea26469706673582212209c940bddf2a36b1185c4348579559bb19628e52d1420b62ac40ed389dc1adb4e64736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var DSTest__factory = /** @class */ (function (_super) {
    __extends(DSTest__factory, _super);
    function DSTest__factory() {
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
    DSTest__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    DSTest__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    DSTest__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    DSTest__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    DSTest__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    DSTest__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    DSTest__factory.bytecode = _bytecode;
    DSTest__factory.abi = _abi;
    return DSTest__factory;
}(ethers_1.ContractFactory));
exports.DSTest__factory = DSTest__factory;
