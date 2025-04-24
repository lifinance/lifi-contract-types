import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AcrossFacetV3, AcrossFacetV3Interface } from "../AcrossFacetV3";
declare type AcrossFacetV3ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AcrossFacetV3__factory extends ContractFactory {
    constructor(...args: AcrossFacetV3ConstructorParams);
    deploy(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AcrossFacetV3>;
    getDeployTransaction(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AcrossFacetV3;
    connect(signer: Signer): AcrossFacetV3__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b506040516200209238038062002092833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a051611fae620000e46000396000818160db01526107a9015260008181607e0152818161075e0152818161085f015261088a0152611fae6000f3fe60806040526004361061003f5760003560e01c806328832cbd1461004457806328cc431614610059578063afdac3d61461006c578063eb6d3a11146100c9575b600080fd5b6100576100523660046118dc565b6100fd565b005b61005761006736600461199b565b61033f565b34801561007857600080fd5b506100a07f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156100d557600080fd5b506100a07f000000000000000000000000000000000000000000000000000000000000000081565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610178576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006101893447611a2e565b9050868061010001516101c8576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101eb8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610222576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610260576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361029d576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102b289600001518a60c001518a8a3361052c565b60c08a015260006102c287611a6d565b9050670de0b6b3a76400006102dd60a0890160808a01611b4b565b67ffffffffffffffff168b60c001516102f69190611b6d565b6103009190611b84565b606082015261030f8a82610674565b5047915050818111156103315761033160008461032c8585611a2e565b610997565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103ba576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103cb3447611a2e565b9050846103f08160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610427576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610465576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104a2576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156104e0576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104f287608001518860c001516109cc565b610504876104ff88611a6d565b610674565b50479050818111156105205761052060008461032c8585611a2e565b50506000909155505050565b600082808203610568576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610577600185611a2e565b81811061058657610586611bbf565b90506020028101906105989190611bee565b6105a9906080810190606001611c2c565b905060006105b682610a81565b905073ffffffffffffffffffffffffffffffffffffffff82166105e0576105dd3482611a2e565b90505b60006105ec8888610acc565b90506105f88888610bd8565b6106058a89898985610c45565b60008261061185610a81565b61061b9190611a2e565b905089811015610666576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b8161012001511515600082610120015151111515146106bf576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8161012001511580156107065750806000015173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1614155b1561073d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015173ffffffffffffffffffffffffffffffffffffffff16610855577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637b9392328360c00151836020015184600001517f000000000000000000000000000000000000000000000000000000000000000086604001518860c0015188606001518a60e001518a60a001518b60c001518c60e001518d61010001518e61012001516040518e63ffffffff1660e01b815260040161081e9c9b9a99989796959493929190611cab565b6000604051808303818588803b15801561083757600080fd5b505af115801561084b573d6000803e3d6000fd5b505050505061095c565b61088882608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610ff7565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637b93923282602001518360000151856080015185604001518760c0015187606001518960e001518960a001518a60c001518b60e001518c61010001518d61012001516040518d63ffffffff1660e01b81526004016109299c9b9a99989796959493929190611cab565b600060405180830381600087803b15801561094357600080fd5b505af1158015610957573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161098b9190611d43565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83166109c1576109bc8282611023565b505050565b6109bc838383611090565b80600003610a06576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a5f5780341015610a5b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610a5b73ffffffffffffffffffffffffffffffffffffffff83163330846110fe565b600073ffffffffffffffffffffffffffffffffffffffff821615610ac457610abf73ffffffffffffffffffffffffffffffffffffffff83163061115b565b610ac6565b475b92915050565b60608160008167ffffffffffffffff811115610aea57610aea6116a1565b604051908082528060200260200182016040528015610b13578160200160208202803683370190505b5090506000805b83811015610bcd57868682818110610b3457610b34611bbf565b9050602002810190610b469190611bee565b610b57906080810190606001611c2c565b9150610b6282610a81565b838281518110610b7457610b74611bbf565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610bc55734838281518110610bad57610bad611bbf565b60200260200101818151610bc19190611a2e565b9052505b600101610b1a565b509095945050505050565b60005b818110156109bc5736838383818110610bf657610bf6611bbf565b9050602002810190610c089190611bee565b9050610c1a60e0820160c08301611e56565b15610c3c57610c3c610c326060830160408401611c2c565b82608001356109cc565b50600101610bdb565b838383838260018114610f125760008585610c61600185611a2e565b818110610c7057610c70611bbf565b9050602002810190610c829190611bee565b610c93906080810190606001611c2c565b9050600089815b81811015610e3e57368d8d83818110610cb557610cb5611bbf565b9050602002810190610cc79190611bee565b9050610cf6610cdc6060830160408401611c2c565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610d595750610d59610d0f6040830160208401611c2c565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610d705750610d70610d0f6020830183611c2c565b8015610df55750610df5610d8760a0830183611e71565b610d9691600491600091611edd565b610d9f91611f07565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610e2b576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e358f82611190565b50600101610c9a565b505060005b610e4e600185611a2e565b811015610f0a576000888883818110610e6957610e69611bbf565b9050602002810190610e7b9190611bee565b610e8c906080810190606001611c2c565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610f0157858281518110610ed357610ed3611bbf565b6020026020010151610ee482610a81565b610eee9190611a2e565b92508215610f0157610f01818885610997565b50600101610e43565b505050610feb565b8760005b81811015610fe857368b8b83818110610f3157610f31611bbf565b9050602002810190610f439190611bee565b9050610f58610cdc6060830160408401611c2c565b80610f715750610f71610d0f6040830160208401611c2c565b8015610f885750610f88610d0f6020830183611c2c565b8015610f9f5750610f9f610d8760a0830183611e71565b610fd5576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fdf8d82611190565b50600101610f16565b50505b50505050505050505050565b6109bc8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61148f565b73ffffffffffffffffffffffffffffffffffffffff8216611070576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a5b73ffffffffffffffffffffffffffffffffffffffff8316826115a2565b73ffffffffffffffffffffffffffffffffffffffff82166110dd576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109bc73ffffffffffffffffffffffffffffffffffffffff841683836115be565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d15600160005114171661114d57637939f4246000526004601cfd5b600060605260405250505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b6111c76111a06020830183611c2c565b3f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470141590565b6111fd576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361123d576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611252610cdc6060850160408601611c2c565b61125d576000611263565b82608001355b9050600061127f61127a6060860160408701611c2c565b610a81565b9050600061129661127a6080870160608801611c2c565b9050826000036112cd576112cd6112b36060870160408801611c2c565b6112c36040880160208901611c2c565b8760800135610ff7565b8460800135821015611318576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161065d565b6000806113286020880188611c2c565b73ffffffffffffffffffffffffffffffffffffffff168561134c60a08a018a611e71565b60405161135a929190611f4f565b60006040518083038185875af1925050503d8060008114611397576040519150601f19603f3d011682016040523d82523d6000602084013e61139c565b606091505b5091509150816113af576113af8161160d565b60006113c461127a60808a0160608b01611c2c565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896113f560208b018b611c2c565b61140560608c0160408d01611c2c565b61141560808d0160608e01611c2c565b8c608001358987116114275786611431565b6114318a88611a2e565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166114dc576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611551573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115759190611f5f565b101561159c5761159c73ffffffffffffffffffffffffffffffffffffffff85168483611617565b50505050565b60003860003884865af1610a5b5763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611603576390b8ec186000526004601cfd5b6000603452505050565b8051602082018181fd5b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d1560016000511417166116035760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d15600160005114171661160357633e3f8f736000526004601cfd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156116f4576116f46116a1565b60405290565b600082601f83011261170b57600080fd5b813567ffffffffffffffff80821115611726576117266116a1565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561176c5761176c6116a1565b8160405283815286602085880101111561178557600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff811681146117c957600080fd5b919050565b803580151581146117c957600080fd5b600061014082840312156117f157600080fd5b6117f96116d0565b905081358152602082013567ffffffffffffffff8082111561181a57600080fd5b611826858386016116fa565b6020840152604084013591508082111561183f57600080fd5b5061184c848285016116fa565b60408301525061185e606083016117a5565b606082015261186f608083016117a5565b608082015261188060a083016117a5565b60a082015260c082013560c082015260e082013560e08201526101006118a78184016117ce565b908201526101206118b98382016117ce565b9082015292915050565b600061014082840312156118d657600080fd5b50919050565b600080600080606085870312156118f257600080fd5b843567ffffffffffffffff8082111561190a57600080fd5b611916888389016117de565b9550602087013591508082111561192c57600080fd5b818701915087601f83011261194057600080fd5b81358181111561194f57600080fd5b8860208260051b850101111561196457600080fd5b60208301955080945050604087013591508082111561198257600080fd5b5061198f878288016118c3565b91505092959194509250565b600080604083850312156119ae57600080fd5b823567ffffffffffffffff808211156119c657600080fd5b6119d2868387016117de565b935060208501359150808211156119e857600080fd5b506119f5858286016118c3565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610ac657610ac66119ff565b803567ffffffffffffffff811681146117c957600080fd5b803563ffffffff811681146117c957600080fd5b60006101408236031215611a8057600080fd5b611a886116d0565b611a91836117a5565b8152611a9f602084016117a5565b6020820152611ab0604084016117a5565b604082015260608301356060820152611acb60808401611a41565b6080820152611adc60a084016117a5565b60a0820152611aed60c08401611a59565b60c0820152611afe60e08401611a59565b60e0820152610100611b11818501611a59565b908201526101208381013567ffffffffffffffff811115611b3157600080fd5b611b3d368287016116fa565b918301919091525092915050565b600060208284031215611b5d57600080fd5b611b6682611a41565b9392505050565b8082028115828204841417610ac657610ac66119ff565b600082611bba577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611c2257600080fd5b9190910192915050565b600060208284031215611c3e57600080fd5b611b66826117a5565b6000815180845260005b81811015611c6d57602081850181015186830182015201611c51565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b73ffffffffffffffffffffffffffffffffffffffff8d811682528c811660208301528b811660408301528a81166060830152608082018a905260a0820189905260c08201889052861660e082015263ffffffff85811661010083015284811661012083015283166101408201526000610180610160830152611d31610180830184611c47565b9e9d5050505050505050505050505050565b602081528151602082015260006020830151610140806040850152611d6c610160850183611c47565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152611da78382611c47565b9250506060850151611dd1608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120611e448187018315159052565b90950151151593019290925250919050565b600060208284031215611e6857600080fd5b611b66826117ce565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611ea657600080fd5b83018035915067ffffffffffffffff821115611ec157600080fd5b602001915036819003821315611ed657600080fd5b9250929050565b60008085851115611eed57600080fd5b83861115611efa57600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015611f475780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b600060208284031215611f7157600080fd5b505191905056fea26469706673582212209e0ecbe602417117c0fd25beea214acf5158a52c69170d9accae4db17d913cc264736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_spokePool";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePool";
        }, {
            readonly name: "_wrappedNative";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "spokePool";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossV3";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetV3.AcrossV3Data";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAmountPercent";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaAcrossV3";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_swapData";
            readonly type: "tuple[]";
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetV3.AcrossV3Data";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "refundAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAmountPercent";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "wrappedNative";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "event";
        readonly name: "LiFiGenericSwapCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiSwappedGeneric";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferRecovered";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferStarted";
        readonly inputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CannotBridgeToSameNetwork";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CumulativeSlippageTooHigh";
        readonly inputs: readonly [{
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receivedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InformationMismatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapDataProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): AcrossFacetV3Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): AcrossFacetV3;
}
export {};
