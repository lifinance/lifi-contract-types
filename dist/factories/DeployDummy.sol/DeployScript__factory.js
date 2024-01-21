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
exports.DeployScript__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        type: "function",
        name: "IS_SCRIPT",
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
        name: "run",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract Dummy",
            },
        ],
        stateMutability: "nonpayable",
    },
];
var _bytecode = "0x608060405260048054600160ff199182168117909255600c8054909116909117905534801561002d57600080fd5b506107ff8061003d6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063c04062261461003b578063f8ccbf471461006d575b600080fd5b61004361008a565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b600c5461007a9060ff1681565b6040519015158152602001610064565b6040517fc1978d1f00000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f505249564154455f4b455900000000000000000000000000000000000000000060448201526000908190737109709ecfa91a80626ff3989d68f67f5b1dd12d9063c1978d1f90606401602060405180830381865afa158015610125573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061014991906102c2565b6040517fce817d4700000000000000000000000000000000000000000000000000000000815260048101829052909150737109709ecfa91a80626ff3989d68f67f5b1dd12d9063ce817d4790602401600060405180830381600087803b1580156101b257600080fd5b505af11580156101c6573d6000803e3d6000fd5b5050505060006040516101d8906102b5565b60208082526009908201527f48692074686572652100000000000000000000000000000000000000000000006040820152606001604051809103906000f080158015610228573d6000803e3d6000fd5b5090507f885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12d60001c73ffffffffffffffffffffffffffffffffffffffff166376eadd366040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561029657600080fd5b505af11580156102aa573d6000803e3d6000fd5b509295945050505050565b6104ee806102dc83390190565b6000602082840312156102d457600080fd5b505191905056fe608060405234801561001057600080fd5b506040516104ee3803806104ee83398101604081905261002f91610058565b600061003b82826101aa565b5050610269565b634e487b7160e01b600052604160045260246000fd5b6000602080838503121561006b57600080fd5b82516001600160401b038082111561008257600080fd5b818501915085601f83011261009657600080fd5b8151818111156100a8576100a8610042565b604051601f8201601f19908116603f011681019083821181831017156100d0576100d0610042565b8160405282815288868487010111156100e857600080fd5b600093505b8284101561010a57848401860151818501870152928501926100ed565b600086848301015280965050505050505092915050565b600181811c9082168061013557607f821691505b60208210810361015557634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156101a557600081815260208120601f850160051c810160208610156101825750805b601f850160051c820191505b818110156101a15782815560010161018e565b5050505b505050565b81516001600160401b038111156101c3576101c3610042565b6101d7816101d18454610121565b8461015b565b602080601f83116001811461020c57600084156101f45750858301515b600019600386901b1c1916600185901b1785556101a1565b600085815260208120601f198616915b8281101561023b5788860151825594840194600190910190840161021c565b50858210156102595787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610276806102786000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806319ff1d211461003b5780638da9b77214610059575b600080fd5b610043610061565b6040516100509190610181565b60405180910390f35b6100436100ef565b6000805461006e906101ed565b80601f016020809104026020016040519081016040528092919081815260200182805461009a906101ed565b80156100e75780601f106100bc576101008083540402835291602001916100e7565b820191906000526020600020905b8154815290600101906020018083116100ca57829003601f168201915b505050505081565b6060600080546100fe906101ed565b80601f016020809104026020016040519081016040528092919081815260200182805461012a906101ed565b80156101775780601f1061014c57610100808354040283529160200191610177565b820191906000526020600020905b81548152906001019060200180831161015a57829003601f168201915b5050505050905090565b600060208083528351808285015260005b818110156101ae57858101830151858201604001528201610192565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b600181811c9082168061020157607f821691505b60208210810361023a577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b5091905056fea2646970667358221220bc20f2ca0178bf6bf5c31f75e333e9a809e95138eb3bac6bf6125fc92afc7ff864736f6c63430008110033a26469706673582212205e0c595ac55321802d2c591bfee433f448ae30f3e8359efd272094e58b32046764736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var DeployScript__factory = /** @class */ (function (_super) {
    __extends(DeployScript__factory, _super);
    function DeployScript__factory() {
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
    DeployScript__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    DeployScript__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    DeployScript__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    DeployScript__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    DeployScript__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    DeployScript__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    DeployScript__factory.bytecode = _bytecode;
    DeployScript__factory.abi = _abi;
    return DeployScript__factory;
}(ethers_1.ContractFactory));
exports.DeployScript__factory = DeployScript__factory;
