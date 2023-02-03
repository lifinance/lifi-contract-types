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
exports.FusePoolZapTest__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        name: "log",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        name: "log_address",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "log_bytes",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes32",
                name: "",
                type: "bytes32",
            },
        ],
        name: "log_bytes32",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "int256",
                name: "",
                type: "int256",
            },
        ],
        name: "log_int",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                indexed: false,
                internalType: "address",
                name: "val",
                type: "address",
            },
        ],
        name: "log_named_address",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                indexed: false,
                internalType: "bytes",
                name: "val",
                type: "bytes",
            },
        ],
        name: "log_named_bytes",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                indexed: false,
                internalType: "bytes32",
                name: "val",
                type: "bytes32",
            },
        ],
        name: "log_named_bytes32",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                indexed: false,
                internalType: "int256",
                name: "val",
                type: "int256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "decimals",
                type: "uint256",
            },
        ],
        name: "log_named_decimal_int",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "val",
                type: "uint256",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "decimals",
                type: "uint256",
            },
        ],
        name: "log_named_decimal_uint",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                indexed: false,
                internalType: "int256",
                name: "val",
                type: "int256",
            },
        ],
        name: "log_named_int",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                indexed: false,
                internalType: "string",
                name: "val",
                type: "string",
            },
        ],
        name: "log_named_string",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "key",
                type: "string",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "val",
                type: "uint256",
            },
        ],
        name: "log_named_uint",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        name: "log_string",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        name: "log_uint",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "bytes",
                name: "",
                type: "bytes",
            },
        ],
        name: "logs",
        type: "event",
    },
    {
        inputs: [],
        name: "IS_TEST",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "failed",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "setUp",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "testCanZapIn",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "testCanZapInWithEth",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x60a06040526000805460ff19166001179055737109709ecfa91a80626ff3989d68f67f5b1dd12d60805234801561003557600080fd5b50608051612d4d61008f6000396000818160e801528181610238015281816104910152818161059a015281816107bd01528181610cc701528181610def01528181610eb401528181610fcf015261107c0152612d4d6000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063ba414fa611610050578063ba414fa61461007e578063ba84b0a21461009a578063fa7626d4146100a257600080fd5b80630a9254e41461006c578063aa7aca6214610076575b600080fd5b6100746100af565b005b6100746101f6565b61008661061b565b604051901515815260200160405180910390f35b61007461077b565b6000546100869060ff1681565b6100b7610e55565b6040517fd9bbf3a100000000000000000000000000000000000000000000000000000000815262ddc19560048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063d9bbf3a190602401600060405180830381600087803b15801561014157600080fd5b505af1158015610155573d6000803e3d6000fd5b5050505073835482fe0532f169024d5e9410199369aad5c77e60405161017a906113e3565b73ffffffffffffffffffffffffffffffffffffffff9091168152602001604051809103906000f0801580156101b3573d6000803e3d6000fd5b50600060026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6040517f06447d560000000000000000000000000000000000000000000000000000000081527347bc10781e8f71c0e7cf97b0a5a88f4cfff2130960048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906306447d5690602401600060405180830381600087803b15801561029157600080fd5b505af11580156102a5573d6000803e3d6000fd5b50506000546040517ffe47068d0000000000000000000000000000000000000000000000000000000081527307cd53380fe9b2a5e64099591b498c73f0efaa666004820152662386f26fc1000093506201000090910473ffffffffffffffffffffffffffffffffffffffff16915063fe47068d9083906024016000604051808303818588803b15801561033757600080fd5b505af115801561034b573d6000803e3d6000fd5b50506040517f70a082310000000000000000000000000000000000000000000000000000000081527347bc10781e8f71c0e7cf97b0a5a88f4cfff213096004820152610401935073e92a3db67e4b6ac86114149f522644b34264f85892506370a082319150602401602060405180830381865afa1580156103d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103f491906113f0565b66b1a2bc2ec500006110fb565b6040805161b33f60248083019190915282518083039091018152604490910182526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fbf6f48540000000000000000000000000000000000000000000000000000000017905290517ff28dceb30000000000000000000000000000000000000000000000000000000081527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169163f28dceb3916104da9190600401611477565b600060405180830381600087803b1580156104f457600080fd5b505af1158015610508573d6000803e3d6000fd5b50506000546040517ffe47068d00000000000000000000000000000000000000000000000000000000815261b33f60048201526201000090910473ffffffffffffffffffffffffffffffffffffffff16925063fe47068d915083906024016000604051808303818588803b15801561057f57600080fd5b505af1158015610593573d6000803e3d6000fd5b50505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561060057600080fd5b505af1158015610614573d6000803e3d6000fd5b5050505050565b60008054610100900460ff161561063b5750600054610100900460ff1690565b6000737109709ecfa91a80626ff3989d68f67f5b1dd12d3b156107765760408051737109709ecfa91a80626ff3989d68f67f5b1dd12d602082018190527f6661696c65640000000000000000000000000000000000000000000000000000828401528251808303840181526060830190935260009290916106e0917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc491608001611491565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815290829052610718916114d9565b6000604051808303816000865af19150503d8060008114610755576040519150601f19603f3d011682016040523d82523d6000602084013e61075a565b606091505b509150508080602001905181019061077291906114f5565b9150505b919050565b6040517f06447d560000000000000000000000000000000000000000000000000000000081527347bc10781e8f71c0e7cf97b0a5a88f4cfff2130960048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906306447d5690602401600060405180830381600087803b15801561081657600080fd5b505af115801561082a573d6000803e3d6000fd5b50505050600073d632f22692fac7611d2aa1c0d552930d43caed3b73ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801561088f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b39190611517565b6108be90600a61168b565b6108ca906103e861169a565b6000546040517f095ea7b30000000000000000000000000000000000000000000000000000000081526201000090910473ffffffffffffffffffffffffffffffffffffffff1660048201526024810182905290915073d632f22692fac7611d2aa1c0d552930d43caed3b9063095ea7b3906044016020604051808303816000875af115801561095d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061098191906114f5565b506000546040517f7f31d7670000000000000000000000000000000000000000000000000000000081527307cd53380fe9b2a5e64099591b498c73f0efaa66600482015273d632f22692fac7611d2aa1c0d552930d43caed3b6024820152604481018390526201000090910473ffffffffffffffffffffffffffffffffffffffff1690637f31d76790606401600060405180830381600087803b158015610a2757600080fd5b505af1158015610a3b573d6000803e3d6000fd5b50506040517f70a082310000000000000000000000000000000000000000000000000000000081527347bc10781e8f71c0e7cf97b0a5a88f4cfff213096004820152610b829250732ec70d3ff3fd7ac5c2a72aaa64a398b6ca7428a591506370a0823190602401602060405180830381865afa158015610abf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ae391906113f0565b732ec70d3ff3fd7ac5c2a72aaa64a398b6ca7428a573ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b42573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b669190611517565b610b7190600a61168b565b610b7d9061138861169a565b6110fb565b6000546040517f095ea7b30000000000000000000000000000000000000000000000000000000081526201000090910473ffffffffffffffffffffffffffffffffffffffff1660048201526024810182905273d632f22692fac7611d2aa1c0d552930d43caed3b9063095ea7b3906044016020604051808303816000875af1158015610c12573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c3691906114f5565b506040805161b33f60248083019190915282518083039091018152604490910182526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fbf6f48540000000000000000000000000000000000000000000000000000000017905290517ff28dceb30000000000000000000000000000000000000000000000000000000081527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169163f28dceb391610d109190600401611477565b600060405180830381600087803b158015610d2a57600080fd5b505af1158015610d3e573d6000803e3d6000fd5b50506000546040517f7f31d76700000000000000000000000000000000000000000000000000000000815261b33f600482015273d632f22692fac7611d2aa1c0d552930d43caed3b6024820152604481018590526201000090910473ffffffffffffffffffffffffffffffffffffffff169250637f31d7679150606401600060405180830381600087803b158015610dd557600080fd5b505af1158015610de9573d6000803e3d6000fd5b505050507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561060057600080fd5b6040517ff877cb1900000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f4554485f4e4f44455f5552495f4d41494e4e455400000000000000000000000060448201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063f877cb19906064016000604051808303816000875af1158015610f12573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610f5891908101906116e0565b6040517fc1978d1f00000000000000000000000000000000000000000000000000000000815260206004820152600b60248201527f464f524b5f4e554d424552000000000000000000000000000000000000000000604482015290915060009073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063c1978d1f906064016020604051808303816000875af1158015611018573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061103c91906113f0565b6040517f71ee464d00000000000000000000000000000000000000000000000000000000815290915073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016906371ee464d906110b390859085906004016117ab565b6020604051808303816000875af11580156110d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110f691906113f0565b505050565b808214611263577f41304facd9323d75b11bcdd609cb38effffdb05710f7caf0e9b16c6d9d709f506040516111879060208082526022908201527f4572726f723a2061203d3d2062206e6f7420736174697366696564205b75696e60408201527f745d000000000000000000000000000000000000000000000000000000000000606082015260800190565b60405180910390a160408051818152600a818301527f202045787065637465640000000000000000000000000000000000000000000060608201526020810183905290517fb2de2fbe801a0df6c0cbddfd448ba3c41d48a040ca35c56c8196ef0fcae721a89181900360800190a160408051818152600a818301527f2020202041637475616c0000000000000000000000000000000000000000000060608201526020810184905290517fb2de2fbe801a0df6c0cbddfd448ba3c41d48a040ca35c56c8196ef0fcae721a89181900360800190a1611263611267565b5050565b737109709ecfa91a80626ff3989d68f67f5b1dd12d3b156113b55760408051737109709ecfa91a80626ff3989d68f67f5b1dd12d602082018190527f6661696c656400000000000000000000000000000000000000000000000000009282019290925260016060820152600091907f70ca10bbd0dbfd9020a9f4b13402c16cb120705e0d1c0aeab10fa353ae586fc490608001604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290526113369291602001611491565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905261136e916114d9565b6000604051808303816000865af19150503d80600081146113ab576040519150601f19603f3d011682016040523d82523d6000602084013e6113b0565b606091505b505050505b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff16610100179055565b61154a806117ce83390190565b60006020828403121561140257600080fd5b5051919050565b60005b8381101561142457818101518382015260200161140c565b50506000910152565b60008151808452611445816020860160208601611409565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152600061148a602083018461142d565b9392505050565b7fffffffff0000000000000000000000000000000000000000000000000000000083168152600082516114cb816004850160208701611409565b919091016004019392505050565b600082516114eb818460208701611409565b9190910192915050565b60006020828403121561150757600080fd5b8151801515811461148a57600080fd5b60006020828403121561152957600080fd5b815160ff8116811461148a57600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600181815b808511156115c257817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156115a8576115a861153a565b808516156115b557918102915b93841c939080029061156e565b509250929050565b6000826115d957506001611685565b816115e657506000611685565b81600181146115fc576002811461160657611622565b6001915050611685565b60ff8411156116175761161761153a565b50506001821b611685565b5060208310610133831016604e8410600b8410161715611645575081810a611685565b61164f8383611569565b807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048211156116815761168161153a565b0290505b92915050565b600061148a60ff8416836115ca565b80820281158282048414176116855761168561153a565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000602082840312156116f257600080fd5b815167ffffffffffffffff8082111561170a57600080fd5b818401915084601f83011261171e57600080fd5b815181811115611730576117306116b1565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715611776576117766116b1565b8160405282815287602084870101111561178f57600080fd5b6117a0836020830160208801611409565b979650505050505050565b6040815260006117be604083018561142d565b9050826020830152939250505056fe60a060405234801561001057600080fd5b5060405161154a38038061154a83398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b6080516114b96100916000396000818160c6015261063201526114b96000f3fe6080604052600436106100295760003560e01c80637f31d7671461002e578063fe47068d14610050575b600080fd5b34801561003a57600080fd5b5061004e6100493660046112f0565b610063565b005b61004e61005e366004611331565b6105cf565b73ffffffffffffffffffffffffffffffffffffffff8316158061013357506040517f1e1c6a0700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84811660048301527f00000000000000000000000000000000000000000000000000000000000000001690631e1c6a0790602401602060405180830381865afa15801561010d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610131919061134e565b155b15610187576040517fbf6f485400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff841660048201526024015b60405180910390fd5b806000036101c1576040517f1f2a200500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f31ff47fa00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8381166004830152600091908516906331ff47fa90602401602060405180830381865afa158015610231573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102559190611370565b905073ffffffffffffffffffffffffffffffffffffffff81166102bc576040517f80855e9e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8416600482015260240161017e565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610329573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034d919061138d565b905061035b84333086610b3a565b61037d73ffffffffffffffffffffffffffffffffffffffff8516836000610d54565b61039e73ffffffffffffffffffffffffffffffffffffffff85168385610d54565b6040517fa0712d680000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff83169063a0712d68906024016020604051808303816000875af115801561040b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061042f919061138d565b506040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152600090829073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561049f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104c3919061138d565b6040517fa9059cbb00000000000000000000000000000000000000000000000000000000815233600482015291900360248201819052915073ffffffffffffffffffffffffffffffffffffffff84169063a9059cbb906044016020604051808303816000875af115801561053b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061055f919061134e565b508273ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167fd7879fe88ac1f070dbb9697d39e6b022615c004aad3a6ab63c2423d30bde8223836040516105bf91815260200190565b60405180910390a3505050505050565b73ffffffffffffffffffffffffffffffffffffffff8116158061069f57506040517f1e1c6a0700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301527f00000000000000000000000000000000000000000000000000000000000000001690631e1c6a0790602401602060405180830381865afa158015610679573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061069d919061134e565b155b156106ee576040517fbf6f485400000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8216600482015260240161017e565b34600003610728576040517f1f2a200500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f31ff47fa0000000000000000000000000000000000000000000000000000000081526000600482018190529073ffffffffffffffffffffffffffffffffffffffff8316906331ff47fa90602401602060405180830381865afa158015610796573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ba9190611370565b905073ffffffffffffffffffffffffffffffffffffffff811661080c576040517f80855e9e0000000000000000000000000000000000000000000000000000000081526000600482015260240161017e565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610879573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061089d919061138d565b60408051600481526024810182526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f1249c58b000000000000000000000000000000000000000000000000000000001790529051919250600091829173ffffffffffffffffffffffffffffffffffffffff8616913491610920916113ca565b60006040518083038185875af1925050503d806000811461095d576040519150601f19603f3d011682016040523d82523d6000602084013e610962565b606091505b506040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529193509150600090849073ffffffffffffffffffffffffffffffffffffffff8716906370a0823190602401602060405180830381865afa1580156109d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109fb919061138d565b03905082158015610a0a575080155b15610a4357816040517f95428dd500000000000000000000000000000000000000000000000000000000815260040161017e9190611430565b6040517fa9059cbb0000000000000000000000000000000000000000000000000000000081523360048201526024810182905273ffffffffffffffffffffffffffffffffffffffff86169063a9059cbb906044016020604051808303816000875af1158015610ab6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ada919061134e565b508473ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167fd7879fe88ac1f070dbb9697d39e6b022615c004aad3a6ab63c2423d30bde8223836040516105bf91815260200190565b73ffffffffffffffffffffffffffffffffffffffff8416610b87576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610bd4576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610c45573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c69919061138d565b9050610c7782868686610f59565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610ce7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d0b919061138d565b610d159190611443565b14610d4c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b801580610df457506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610dce573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610df2919061138d565b155b610e80576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840161017e565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052610f549084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610fbd565b505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610fb79085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610ed2565b50505050565b600061101f826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166110c99092919063ffffffff16565b805190915015610f54578080602001905181019061103d919061134e565b610f54576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161017e565b60606110d884846000856110e2565b90505b9392505050565b606082471015611174576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161017e565b73ffffffffffffffffffffffffffffffffffffffff85163b6111f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161017e565b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161121b91906113ca565b60006040518083038185875af1925050503d8060008114611258576040519150601f19603f3d011682016040523d82523d6000602084013e61125d565b606091505b509150915061126d828286611278565b979650505050505050565b606083156112875750816110db565b8251156112975782518084602001fd5b816040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161017e9190611430565b73ffffffffffffffffffffffffffffffffffffffff811681146112ed57600080fd5b50565b60008060006060848603121561130557600080fd5b8335611310816112cb565b92506020840135611320816112cb565b929592945050506040919091013590565b60006020828403121561134357600080fd5b81356110db816112cb565b60006020828403121561136057600080fd5b815180151581146110db57600080fd5b60006020828403121561138257600080fd5b81516110db816112cb565b60006020828403121561139f57600080fd5b5051919050565b60005b838110156113c15781810151838201526020016113a9565b50506000910152565b600082516113dc8184602087016113a6565b9190910192915050565b600081518084526113fe8160208601602086016113a6565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006110db60208301846113e6565b8181038181111561147d577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b9291505056fea2646970667358221220d005f71eab6b8c5dede38c832b4fd18f04c667580b99632455d2f578c4d1d0ab64736f6c63430008110033a264697066735822122023f6ac156114de124ad650f4cfc1cd1fd34eded5e68553af47a82f37b4a4b20664736f6c63430008110033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var FusePoolZapTest__factory = /** @class */ (function (_super) {
    __extends(FusePoolZapTest__factory, _super);
    function FusePoolZapTest__factory() {
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
    FusePoolZapTest__factory.prototype.deploy = function (overrides) {
        return _super.prototype.deploy.call(this, overrides || {});
    };
    FusePoolZapTest__factory.prototype.getDeployTransaction = function (overrides) {
        return _super.prototype.getDeployTransaction.call(this, overrides || {});
    };
    FusePoolZapTest__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    FusePoolZapTest__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    FusePoolZapTest__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    FusePoolZapTest__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    FusePoolZapTest__factory.bytecode = _bytecode;
    FusePoolZapTest__factory.abi = _abi;
    return FusePoolZapTest__factory;
}(ethers_1.ContractFactory));
exports.FusePoolZapTest__factory = FusePoolZapTest__factory;
