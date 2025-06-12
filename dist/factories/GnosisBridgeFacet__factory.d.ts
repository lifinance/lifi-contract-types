import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GnosisBridgeFacet, GnosisBridgeFacetInterface } from "../GnosisBridgeFacet";
declare type GnosisBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GnosisBridgeFacet__factory extends ContractFactory {
    constructor(...args: GnosisBridgeFacetConstructorParams);
    deploy(_gnosisBridgeRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GnosisBridgeFacet>;
    getDeployTransaction(_gnosisBridgeRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GnosisBridgeFacet;
    connect(signer: Signer): GnosisBridgeFacet__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b5060405162001de238038062001de283398101604081905261003191610069565b6001600160a01b038116610058576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052610099565b60006020828403121561007b57600080fd5b81516001600160a01b038116811461009257600080fd5b9392505050565b608051611d26620000bc6000396000818161083c01526108c60152611d266000f3fe6080604052600436106100295760003560e01c80637bf96e0a1461002e578063f66fe51914610043575b600080fd5b61004161003c3660046118b7565b610063565b005b34801561004f57600080fd5b5061004161005e366004611951565b610405565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100de576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100ef344761198e565b90508580610100015161012e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561016c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8761018f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101c6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610204576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610241576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b88606467ffffffffffffffff16808260e001511461028b576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808b015173ffffffffffffffffffffffffffffffffffffffff16736b175474e89094c44da98b954eedeac495271d0f148015906102f7575060808b015173ffffffffffffffffffffffffffffffffffffffff1673dc035d45d973e3ec169d2276ddab16f1e407384f14155b8061037a5750881580159061037a5750898961031460018261198e565b818110610323576103236119c8565b905060200281019061033591906119f7565b610346906080810190606001611a35565b73ffffffffffffffffffffffffffffffffffffffff168b6080015173ffffffffffffffffffffffffffffffffffffffff1614155b156103b1576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103c68b600001518c60c001518c8c336106eb565b60c08c01526103d48b610832565b50479350505050818111156103f8576103f86000846103f3858561198e565b61095e565b5050600090915550505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610480576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556101008201518290156104c3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8280610120015115610501576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b836105248160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561055b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610599576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036105d6576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84606467ffffffffffffffff16808260e0015114610620576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608087015173ffffffffffffffffffffffffffffffffffffffff16736b175474e89094c44da98b954eedeac495271d0f1480159061068c5750608087015173ffffffffffffffffffffffffffffffffffffffff1673dc035d45d973e3ec169d2276ddab16f1e407384f14155b156106c3576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106d587608001518860c00151610993565b6106de87610832565b5050600090935550505050565b600082808203610727576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561073660018561198e565b818110610745576107456119c8565b905060200281019061075791906119f7565b610768906080810190606001611a35565b9050600061077582610a48565b905073ffffffffffffffffffffffffffffffffffffffff821661079f5761079c348261198e565b90505b60006107ab8888610a93565b90506107b78888610b9f565b6107c48a89898985610c0c565b6000826107d085610a48565b6107da919061198e565b905089811015610824576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b61086581608001517f00000000000000000000000000000000000000000000000000000000000000008360c00151610fbe565b608081015160a082015160c08301516040517fad58bdd100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9384166004820152918316602483015260448201527f00000000000000000000000000000000000000000000000000000000000000009091169063ad58bdd190606401600060405180830381600087803b15801561090c57600080fd5b505af1158015610920573d6000803e3d6000fd5b505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1816040516109539190611abb565b60405180910390a150565b73ffffffffffffffffffffffffffffffffffffffff8316610988576109838282610fea565b505050565b610983838383611057565b806000036109cd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a265780341015610a22576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610a2273ffffffffffffffffffffffffffffffffffffffff83163330846110c5565b600073ffffffffffffffffffffffffffffffffffffffff821615610a8b57610a8673ffffffffffffffffffffffffffffffffffffffff831630611122565b610a8d565b475b92915050565b60608160008167ffffffffffffffff811115610ab157610ab1611695565b604051908082528060200260200182016040528015610ada578160200160208202803683370190505b5090506000805b83811015610b9457868682818110610afb57610afb6119c8565b9050602002810190610b0d91906119f7565b610b1e906080810190606001611a35565b9150610b2982610a48565b838281518110610b3b57610b3b6119c8565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610b8c5734838281518110610b7457610b746119c8565b60200260200101818151610b88919061198e565b9052505b600101610ae1565b509095945050505050565b60005b818110156109835736838383818110610bbd57610bbd6119c8565b9050602002810190610bcf91906119f7565b9050610be160e0820160c08301611bce565b15610c0357610c03610bf96060830160408401611a35565b8260800135610993565b50600101610ba2565b838383838260018114610ed95760008585610c2860018561198e565b818110610c3757610c376119c8565b9050602002810190610c4991906119f7565b610c5a906080810190606001611a35565b9050600089815b81811015610e0557368d8d83818110610c7c57610c7c6119c8565b9050602002810190610c8e91906119f7565b9050610cbd610ca36060830160408401611a35565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610d205750610d20610cd66040830160208401611a35565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610d375750610d37610cd66020830183611a35565b8015610dbc5750610dbc610d4e60a0830183611be9565b610d5d91600491600091611c55565b610d6691611c7f565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610df2576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610dfc8f82611157565b50600101610c61565b505060005b610e1560018561198e565b811015610ed1576000888883818110610e3057610e306119c8565b9050602002810190610e4291906119f7565b610e53906080810190606001611a35565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ec857858281518110610e9a57610e9a6119c8565b6020026020010151610eab82610a48565b610eb5919061198e565b92508215610ec857610ec881888561095e565b50600101610e0a565b505050610fb2565b8760005b81811015610faf57368b8b83818110610ef857610ef86119c8565b9050602002810190610f0a91906119f7565b9050610f1f610ca36060830160408401611a35565b80610f385750610f38610cd66040830160208401611a35565b8015610f4f5750610f4f610cd66020830183611a35565b8015610f665750610f66610d4e60a0830183611be9565b610f9c576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fa68d82611157565b50600101610edd565b50505b50505050505050505050565b6109838383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6113d1565b73ffffffffffffffffffffffffffffffffffffffff8216611037576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a2273ffffffffffffffffffffffffffffffffffffffff831682611500565b73ffffffffffffffffffffffffffffffffffffffff82166110a4576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61098373ffffffffffffffffffffffffffffffffffffffff8416838361151c565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d15600160005114171661111457637939f4246000526004601cfd5b600060605260405250505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b61116c6111676020830183611a35565b61156b565b6111a2576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036111e2576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006111f7610ca36060850160408601611a35565b611202576000611208565b82608001355b9050600061122461121f6080860160608701611a35565b610a48565b90508160000361125b5761125b6112416060860160408701611a35565b6112516040870160208801611a35565b8660800135610fbe565b60008061126b6020870187611a35565b73ffffffffffffffffffffffffffffffffffffffff168461128f60a0890189611be9565b60405161129d929190611cc7565b60006040518083038185875af1925050503d80600081146112da576040519150601f19603f3d011682016040523d82523d6000602084013e6112df565b606091505b5091509150816112f2576112f281611601565b600061130761121f6080890160608a01611a35565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861133860208a018a611a35565b61134860608b0160408c01611a35565b61135860808c0160608d01611a35565b8b6080013589871161136a5786611374565b6113748a8861198e565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156114fa5773ffffffffffffffffffffffffffffffffffffffff831661143a576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156114af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114d39190611cd7565b10156114fa576114fa73ffffffffffffffffffffffffffffffffffffffff8516848361160b565b50505050565b60003860003884865af1610a225763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611561576390b8ec186000526004601cfd5b6000603452505050565b6040805160178082528183019092526000918291906020820181803683370190505090506017600060208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff00000000000000000000000000000000000000000000000000000000008216016115f857506023015160601c3b151592915050565b5050503b151590565b8051602082018181fd5b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d1560016000511417166115615760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d15600160005114171661156157633e3f8f736000526004601cfd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156116e8576116e8611695565b60405290565b600082601f8301126116ff57600080fd5b813567ffffffffffffffff8082111561171a5761171a611695565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561176057611760611695565b8160405283815286602085880101111561177957600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff811681146117bd57600080fd5b919050565b803580151581146117bd57600080fd5b600061014082840312156117e557600080fd5b6117ed6116c4565b905081358152602082013567ffffffffffffffff8082111561180e57600080fd5b61181a858386016116ee565b6020840152604084013591508082111561183357600080fd5b50611840848285016116ee565b60408301525061185260608301611799565b606082015261186360808301611799565b608082015261187460a08301611799565b60a082015260c082013560c082015260e082013560e082015261010061189b8184016117c2565b908201526101206118ad8382016117c2565b9082015292915050565b6000806000604084860312156118cc57600080fd5b833567ffffffffffffffff808211156118e457600080fd5b6118f0878388016117d2565b9450602086013591508082111561190657600080fd5b818601915086601f83011261191a57600080fd5b81358181111561192957600080fd5b8760208260051b850101111561193e57600080fd5b6020830194508093505050509250925092565b60006020828403121561196357600080fd5b813567ffffffffffffffff81111561197a57600080fd5b611986848285016117d2565b949350505050565b81810381811115610a8d577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611a2b57600080fd5b9190910192915050565b600060208284031215611a4757600080fd5b611a5082611799565b9392505050565b6000815180845260005b81811015611a7d57602081850181015186830182015201611a61565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081528151602082015260006020830151610140806040850152611ae4610160850183611a57565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152611b1f8382611a57565b9250506060850151611b49608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120611bbc8187018315159052565b90950151151593019290925250919050565b600060208284031215611be057600080fd5b611a50826117c2565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611c1e57600080fd5b83018035915067ffffffffffffffff821115611c3957600080fd5b602001915036819003821315611c4e57600080fd5b9250929050565b60008085851115611c6557600080fd5b83861115611c7257600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015611cbf5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b600060208284031215611ce957600080fd5b505191905056fea26469706673582212206f2ff5a01d43a60a37a738f0107c82701cd1099cf83b6faa227b384832a113f864736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_gnosisBridgeRouter";
            readonly type: "address";
            readonly internalType: "contract IGnosisBridgeRouter";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaGnosisBridge";
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
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaGnosisBridge";
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
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
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
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidDestinationChain";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidSendingToken";
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
    static createInterface(): GnosisBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GnosisBridgeFacet;
}
export {};
