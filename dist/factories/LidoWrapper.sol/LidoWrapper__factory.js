/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { utils, Contract, ContractFactory } from "ethers";
const _abi = [
    {
        type: "constructor",
        inputs: [
            {
                name: "_stETHAddress",
                type: "address",
                internalType: "address",
            },
            {
                name: "_wstETHAddress",
                type: "address",
                internalType: "address",
            },
            {
                name: "_owner",
                type: "address",
                internalType: "address",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "ETH_CHAIN_ID",
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
        name: "ST_ETH",
        inputs: [],
        outputs: [
            {
                name: "",
                type: "address",
                internalType: "contract IStETH",
            },
        ],
        stateMutability: "view",
    },
    {
        type: "function",
        name: "WST_ETH_ADDRESS",
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
        type: "function",
        name: "unwrapWstETHToStETH",
        inputs: [
            {
                name: "_amount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "unwrappedAmount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
    },
    {
        type: "function",
        name: "withdrawToken",
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
        name: "wrapStETHToWstETH",
        inputs: [
            {
                name: "_amount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        outputs: [
            {
                name: "wrappedAmount",
                type: "uint256",
                internalType: "uint256",
            },
        ],
        stateMutability: "nonpayable",
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
        type: "event",
        name: "TokensWithdrawn",
        inputs: [
            {
                name: "assetId",
                type: "address",
                indexed: false,
                internalType: "address",
            },
            {
                name: "receiver",
                type: "address",
                indexed: false,
                internalType: "address payable",
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
        name: "ContractNotYetReadyForMainnet",
        inputs: [],
    },
    {
        type: "error",
        name: "ExternalCallFailed",
        inputs: [],
    },
    {
        type: "error",
        name: "InvalidConfig",
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
const _bytecode = "0x60c060405234801561000f575f5ffd5b50604051610eeb380380610eeb83398101604081905261002e91610160565b5f80546001600160a01b0319166001600160a01b03838116919091179091558316158061006257506001600160a01b038216155b8061007457506001600160a01b038116155b15610092576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b03808416608052821660a0525f1946016100c657604051638bb9ffc760e01b815260040160405180910390fd5b60a05160805160405163095ea7b360e01b81526001600160a01b0391821660048201525f19602482015291169063095ea7b3906044016020604051808303815f875af1158015610118573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061013c91906101a0565b505050506101c6565b80516001600160a01b038116811461015b575f5ffd5b919050565b5f5f5f60608486031215610172575f5ffd5b61017b84610145565b925061018960208501610145565b915061019760408501610145565b90509250925092565b5f602082840312156101b0575f5ffd5b815180151581146101bf575f5ffd5b9392505050565b60805160a051610cd36102185f395f818161019e01528181610695015261083c01525f81816101100152818161047e0152818161052e015281816105de015281816108eb01526109a20152610cd35ff3fe608060405234801561000f575f5ffd5b50600436106100c4575f3560e01c80638da5cb5b1161007d578063a96bb86a11610058578063a96bb86a14610199578063e30c3978146101c0578063f2fde38b146101e0575f5ffd5b80638da5cb5b1461015f5780639f5fa0281461017e578063a816ca9214610186575f5ffd5b806324dd6483116100ad57806324dd6483146100e5578063338346d21461010b5780637200b82914610157575f5ffd5b806301e33667146100c857806323452b9c146100dd575b5f5ffd5b6100db6100d6366004610bf0565b6101f3565b005b6100db610378565b6100f86100f3366004610c2e565b610441565b6040519081526020015b60405180910390f35b6101327f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610102565b6100db61071b565b5f546101329073ffffffffffffffffffffffffffffffffffffffff1681565b6100f8600181565b6100f8610194366004610c2e565b6107ff565b6101327f000000000000000000000000000000000000000000000000000000000000000081565b6001546101329073ffffffffffffffffffffffffffffffffffffffff1681565b6100db6101ee366004610c45565b610a27565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610243576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166102fa575f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f81146102b4576040519150601f19603f3d011682016040523d82523d5f602084013e6102b9565b606091505b50509050806102f4576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5061031b565b61031b73ffffffffffffffffffffffffffffffffffffffff84168383610b83565b6040805173ffffffffffffffffffffffffffffffffffffffff8086168252841660208201529081018290527f6337ed398c0e8467698c581374fdce4db14922df487b5a39483079f5f59b60a49060600160405180910390a1505050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146103c8576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610417576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6040517f23b872dd000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018290525f907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906323b872dd906064016020604051808303815f875af11580156104d9573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104fd9190610c67565b506040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015610588573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906105ac9190610c86565b6040517fde0e9a3e000000000000000000000000000000000000000000000000000000008152600481018290529091507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063de0e9a3e906024016020604051808303815f875af1158015610639573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061065d9190610c86565b6040517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481018290529092507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063a9059cbb906044016020604051808303815f875af11580156106f0573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107149190610c67565b5050919050565b60015473ffffffffffffffffffffffffffffffffffffffff1633811461076d576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b6040517f23b872dd000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018290525f907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906323b872dd906064016020604051808303815f875af1158015610897573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108bb9190610c67565b506040517fea598cb0000000000000000000000000000000000000000000000000000000008152600481018390527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063ea598cb0906024016020604051808303815f875af1158015610946573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061096a9190610c86565b6040517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481018290529091507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063a9059cbb906044016020604051808303815f875af11580156109fd573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610a219190610c67565b50919050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610a77576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610ac4576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603610b13576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716610bc3576390b8ec185f526004601cfd5b5f603452505050565b73ffffffffffffffffffffffffffffffffffffffff81168114610bed575f5ffd5b50565b5f5f5f60608486031215610c02575f5ffd5b8335610c0d81610bcc565b92506020840135610c1d81610bcc565b929592945050506040919091013590565b5f60208284031215610c3e575f5ffd5b5035919050565b5f60208284031215610c55575f5ffd5b8135610c6081610bcc565b9392505050565b5f60208284031215610c77575f5ffd5b81518015158114610c60575f5ffd5b5f60208284031215610c96575f5ffd5b505191905056fea2646970667358221220858a275c68fac270efb1a282b2a847d83a6afbb7532dfb9e683206ed54be53b064736f6c634300081d0033";
const isSuperArgs = (xs) => xs.length > 1;
export class LidoWrapper__factory extends ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_stETHAddress, _wstETHAddress, _owner, overrides) {
        return super.deploy(_stETHAddress, _wstETHAddress, _owner, overrides || {});
    }
    getDeployTransaction(_stETHAddress, _wstETHAddress, _owner, overrides) {
        return super.getDeployTransaction(_stETHAddress, _wstETHAddress, _owner, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static bytecode = _bytecode;
    static abi = _abi;
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
