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
exports.LibUtilTest__factory = void 0;
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
        name: "excludeArtifacts",
        inputs: [],
        outputs: [
            {
                name: "excludedArtifacts_",
                type: "string[]",
                internalType: "string[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "excludeContracts",
        inputs: [],
        outputs: [
            {
                name: "excludedContracts_",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "excludeSenders",
        inputs: [],
        outputs: [
            {
                name: "excludedSenders_",
                type: "address[]",
                internalType: "address[]",
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
        type: "function",
        name: "setUp",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "targetArtifactSelectors",
        inputs: [],
        outputs: [
            {
                name: "targetedArtifactSelectors_",
                type: "tuple[]",
                internalType: "struct StdInvariant.FuzzSelector[]",
                components: [
                    {
                        name: "addr",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "selectors",
                        type: "bytes4[]",
                        internalType: "bytes4[]",
                    },
                ],
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "targetArtifacts",
        inputs: [],
        outputs: [
            {
                name: "targetedArtifacts_",
                type: "string[]",
                internalType: "string[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "targetContracts",
        inputs: [],
        outputs: [
            {
                name: "targetedContracts_",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "targetSelectors",
        inputs: [],
        outputs: [
            {
                name: "targetedSelectors_",
                type: "tuple[]",
                internalType: "struct StdInvariant.FuzzSelector[]",
                components: [
                    {
                        name: "addr",
                        type: "address",
                        internalType: "address",
                    },
                    {
                        name: "selectors",
                        type: "bytes4[]",
                        internalType: "bytes4[]",
                    },
                ],
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "targetSenders",
        inputs: [],
        outputs: [
            {
                name: "targetedSenders_",
                type: "address[]",
                internalType: "address[]",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "test_forwardRevertMsgFromExternalCall",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "test_forwardRevertMsgWithMessageFromExternalCall",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "test_revert",
        inputs: [],
        outputs: [],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "test_revertWithMessage",
        inputs: [],
        outputs: [],
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
        name: "log_array",
        inputs: [
            {
                name: "val",
                type: "uint256[]",
                indexed: false,
                internalType: "uint256[]",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_array",
        inputs: [
            {
                name: "val",
                type: "int256[]",
                indexed: false,
                internalType: "int256[]",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_array",
        inputs: [
            {
                name: "val",
                type: "address[]",
                indexed: false,
                internalType: "address[]",
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
        name: "log_named_array",
        inputs: [
            {
                name: "key",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "val",
                type: "uint256[]",
                indexed: false,
                internalType: "uint256[]",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_named_array",
        inputs: [
            {
                name: "key",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "val",
                type: "int256[]",
                indexed: false,
                internalType: "int256[]",
            },
        ],
        anonymous: false,
    },
    {
        type: "event",
        name: "log_named_array",
        inputs: [
            {
                name: "key",
                type: "string",
                indexed: false,
                internalType: "string",
            },
            {
                name: "val",
                type: "address[]",
                indexed: false,
                internalType: "address[]",
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
    {
        type: "error",
        name: "CustomError",
        inputs: [],
    },
    {
        type: "error",
        name: "CustomErrorWithMessage",
        inputs: [
            {
                name: "message",
                type: "string",
                internalType: "string",
            },
        ],
    },
];
var _bytecode = "0x608060405260008054600160ff19918216811790925560048054909116909117905534801561002d57600080fd5b506115498061003d6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80636d3d141611610097578063ba414fa611610066578063ba414fa614610184578063dd91d8871461019c578063e20c9f71146101a4578063fa7626d4146101ac57600080fd5b80636d3d14161461015757806385226c811461015f578063916a17c614610174578063b5508aa91461017c57600080fd5b80633e5e3c23116100d35780633e5e3c231461012a5780633f7286f41461013257806347f30f6f1461013a57806366d9a9a01461014257600080fd5b80630a9254e4146100fa5780631ed7831c146101045780632449feb014610122575b600080fd5b6101026101b9565b005b61010c610297565b6040516101199190610e2a565b60405180910390f35b610102610306565b61010c610428565b61010c610495565b610102610502565b61014a610665565b6040516101199190610e84565b610102610776565b610167610821565b6040516101199190610fe8565b61014a6108f1565b6101676109f9565b61018c610ac9565b6040519015158152602001610119565b610102610c29565b61010c610d99565b60005461018c9060ff1681565b6040516101c590610e10565b604051809103906000f0801580156101e1573d6000803e3d6000fd5b50601b80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905560405161023390610e1d565b604051809103906000f08015801561024f573d6000803e3d6000fd5b50601c80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6060600d8054806020026020016040519081016040528092919081815260200182805480156102fc57602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff1681526001909101906020018083116102d1575b5050505050905090565b60408051602060248201819052601460448301527f437573746f6d206572726f72206d6573736167650000000000000000000000006064808401919091528351808403909101815260849092018352810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fb732bc060000000000000000000000000000000000000000000000000000000017905290517ff28dceb3000000000000000000000000000000000000000000000000000000008152737109709ecfa91a80626ff3989d68f67f5b1dd12d9063f28dceb3906103ea908490600401611068565b600060405180830381600087803b15801561040457600080fd5b505af1158015610418573d6000803e3d6000fd5b5050505061042581610e06565b50565b6060600f8054806020026020016040519081016040528092919081815260200182805480156102fc5760200282019190600052602060002090815473ffffffffffffffffffffffffffffffffffffffff1681526001909101906020018083116102d1575050505050905090565b6060600e8054806020026020016040519081016040528092919081815260200182805480156102fc5760200282019190600052602060002090815473ffffffffffffffffffffffffffffffffffffffff1681526001909101906020018083116102d1575050505050905090565b6040805160048082526024820183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f9f0d3cb00000000000000000000000000000000000000000000000000000000017905291517ff28dceb30000000000000000000000000000000000000000000000000000000081529091737109709ecfa91a80626ff3989d68f67f5b1dd12d9163f28dceb3916105a891859101611068565b600060405180830381600087803b1580156105c257600080fd5b505af11580156105d6573d6000803e3d6000fd5b5050601b54601c546040517f3af5bfff00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff918216600482015291169250633af5bfff91506024015b600060405180830381600087803b15801561064a57600080fd5b505af115801561065e573d6000803e3d6000fd5b5050505050565b60606012805480602002602001604051908101604052809291908181526020016000905b8282101561076d57600084815260209081902060408051808201825260028602909201805473ffffffffffffffffffffffffffffffffffffffff16835260018101805483518187028101870190945280845293949193858301939283018282801561075557602002820191906000526020600020906000905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190600401906020826003010492830192600103820291508084116107025790505b50505050508152505081526020019060010190610689565b50505050905090565b604080516004808252602480830184526020830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f09caebf30000000000000000000000000000000000000000000000000000000090811790915293517fc31eb0e0000000000000000000000000000000000000000000000000000000008152918201939093529091737109709ecfa91a80626ff3989d68f67f5b1dd12d9163c31eb0e091016103ea565b60606011805480602002602001604051908101604052809291908181526020016000905b8282101561076d57838290600052602060002001805461086490611082565b80601f016020809104026020016040519081016040528092919081815260200182805461089090611082565b80156108dd5780601f106108b2576101008083540402835291602001916108dd565b820191906000526020600020905b8154815290600101906020018083116108c057829003601f168201915b505050505081526020019060010190610845565b60606013805480602002602001604051908101604052809291908181526020016000905b8282101561076d57600084815260209081902060408051808201825260028602909201805473ffffffffffffffffffffffffffffffffffffffff1683526001810180548351818702810187019094528084529394919385830193928301828280156109e157602002820191906000526020600020906000905b82829054906101000a900460e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001906004019060208260030104928301926001038202915080841161098e5790505b50505050508152505081526020019060010190610915565b60606010805480602002602001604051908101604052809291908181526020016000905b8282101561076d578382906000526020600020018054610a3c90611082565b80601f0160208091040260200160405190810160405280929190818152602001828054610a6890611082565b8015610ab55780601f10610a8a57610100808354040283529160200191610ab5565b820191906000526020600020905b815481529060010190602001808311610a9857829003601f168201915b505050505081526020019060010190610a1d565b60008054610100900460ff1615610ae95750600054610100900460ff1690565b6000737109709ecfa91a80626ff3989d68f67f5b1dd12d3b15610c245760408051737109709ecfa91a80626ff3989d68f67f5b1dd12d602082018190527f6661696c6564000000000000000000000000000000000000000000000000000082840152825180830384018152606083019093526000929091610b8e917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc4916080016110d5565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815290829052610bc69161111d565b6000604051808303816000865af19150503d8060008114610c03576040519150601f19603f3d011682016040523d82523d6000602084013e610c08565b606091505b5091505080806020019051810190610c209190611139565b9150505b919050565b60408051602060248201819052600e60448301527f446f6e27742063616c6c206d65210000000000000000000000000000000000006064808401919091528351808403909101815260849092018352810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f49411f880000000000000000000000000000000000000000000000000000000017905290517ff28dceb3000000000000000000000000000000000000000000000000000000008152737109709ecfa91a80626ff3989d68f67f5b1dd12d9063f28dceb390610d0d908490600401611068565b600060405180830381600087803b158015610d2757600080fd5b505af1158015610d3b573d6000803e3d6000fd5b5050601b54601c546040517ff24a1c9200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff91821660048201529116925063f24a1c929150602401610630565b6060600c8054806020026020016040519081016040528092919081815260200182805480156102fc5760200282019190600052602060002090815473ffffffffffffffffffffffffffffffffffffffff1681526001909101906020018083116102d1575050505050905090565b8051602082018181fd5b6102858061115c83390190565b610133806113e183390190565b6020808252825182820181905260009190848201906040850190845b81811015610e7857835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101610e46565b50909695505050505050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b84811015610f6b578984037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc00186528251805173ffffffffffffffffffffffffffffffffffffffff168552880151888501889052805188860181905290890190839060608701905b80831015610f565783517fffffffff00000000000000000000000000000000000000000000000000000000168252928b019260019290920191908b0190610f14565b50978a01979550505091870191600101610eac565b50919998505050505050505050565b60005b83811015610f95578181015183820152602001610f7d565b50506000910152565b60008151808452610fb6816020860160208601610f7a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561105b577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0888603018452611049858351610f9e565b9450928501929085019060010161100f565b5092979650505050505050565b60208152600061107b6020830184610f9e565b9392505050565b600181811c9082168061109657607f821691505b6020821081036110cf577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7fffffffff00000000000000000000000000000000000000000000000000000000831681526000825161110f816004850160208701610f7a565b919091016004019392505050565b6000825161112f818460208701610f7a565b9190910192915050565b60006020828403121561114b57600080fd5b8151801515811461107b57600080fdfe608060405234801561001057600080fd5b50610265806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80633af5bfff1461003b578063f24a1c9214610050575b600080fd5b61004e6100493660046101c3565b610063565b005b61004e61005e3660046101c3565b61013b565b60408051600481526024810182526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fb0bea725000000000000000000000000000000000000000000000000000000001790529051600091829173ffffffffffffffffffffffffffffffffffffffff8516916100e191610200565b6000604051808303816000865af19150503d806000811461011e576040519150601f19603f3d011682016040523d82523d6000602084013e610123565b606091505b50915091508161013657610136816101b9565b505050565b60408051600481526024810182526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f591a2a69000000000000000000000000000000000000000000000000000000001790529051600091829173ffffffffffffffffffffffffffffffffffffffff8516916100e191610200565b8051602082018181fd5b6000602082840312156101d557600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146101f957600080fd5b9392505050565b6000825160005b818110156102215760208186018101518583015201610207565b50600092019182525091905056fea2646970667358221220041b2b240ce23cf9c03340c187d567a1f69e6f97418514fe030a46dbee7cca2f64736f6c63430008110033608060405234801561001057600080fd5b50610113806100206000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c8063591a2a69146037578063b0bea72514603f575b600080fd5b603d6045565b005b603d60ab565b6040517f49411f8800000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f446f6e27742063616c6c206d6521000000000000000000000000000000000000604482015260640160405180910390fd5b6040517f9f0d3cb000000000000000000000000000000000000000000000000000000000815260040160405180910390fdfea264697066735822122018b2de82207556757d216d62db8a54e8087bd21e7c21ab1605e55a2a74941a7764736f6c63430008110033a2646970667358221220c1e84c819d0287d1ac71c6abe53907e25ec2d5db2e94720031b4fe79c9fe596a64736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var LibUtilTest__factory = /** @class */ (function (_super) {
    __extends(LibUtilTest__factory, _super);
    function LibUtilTest__factory() {
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
    LibUtilTest__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    LibUtilTest__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    LibUtilTest__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    LibUtilTest__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    LibUtilTest__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    LibUtilTest__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    LibUtilTest__factory.bytecode = _bytecode;
    LibUtilTest__factory.abi = _abi;
    return LibUtilTest__factory;
}(ethers_1.ContractFactory));
exports.LibUtilTest__factory = LibUtilTest__factory;