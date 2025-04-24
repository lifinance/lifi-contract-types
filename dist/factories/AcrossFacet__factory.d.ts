import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AcrossFacet, AcrossFacetInterface } from "../AcrossFacet";
declare type AcrossFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AcrossFacet__factory extends ContractFactory {
    constructor(...args: AcrossFacetConstructorParams);
    deploy(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AcrossFacet>;
    getDeployTransaction(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AcrossFacet;
    connect(signer: Signer): AcrossFacet__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b5060405162001f2c38038062001f2c833981016040819052620000349162000065565b6001600160a01b039182166080521660a052620000a4565b6001600160a01b03811681146200006257600080fd5b50565b600080604083850312156200007957600080fd5b825162000086816200004c565b602084015190925062000099816200004c565b809150509250929050565b60805160a051611e54620000d860003960006105d10152600081816105a60152818161068701526106b20152611e546000f3fe6080604052600436106100295760003560e01c80631fd8010c1461002e5780633a3f733214610043575b600080fd5b61004161003c36600461185b565b610056565b005b6100416100513660046118bf565b61027f565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e2344761197e565b9050846101078160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561013e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361017c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101b9576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156101f7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610235576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024788608001518960c001516104ac565b6102518888610561565b5047915050818111156102735761027360008461026e858561197e565b6107c7565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102fa576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061030b344761197e565b90508680610100015161034a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610388576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886103ab8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103e2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610420576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361045d576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104728a600001518b60c001518b8b336107fc565b60c08b01526104818a88610561565b50479150508181111561049e5761049e60008461026e858561197e565b505060009091555050505050565b806000036104e6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661053f578034101561053b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61053b73ffffffffffffffffffffffffffffffffffffffff8316333084610944565b608082015173ffffffffffffffffffffffffffffffffffffffff1661067d5760c082015160a083015160e084015173ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001692631186ec339290917f000000000000000000000000000000000000000000000000000000000000000090839061060060208901896119b8565b61061060408a0160208b016119e2565b61061d60408b018b611a08565b8b606001356040518b63ffffffff1660e01b815260040161064699989796959493929190611a74565b6000604051808303818588803b15801561065f57600080fd5b505af1158015610673573d6000803e3d6000fd5b505050505061078c565b6106b082608001517f00000000000000000000000000000000000000000000000000000000000000008460c001516109a1565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16631186ec338360a0015184608001518560c001518660e0015186600001602081019061071391906119b8565b6107236040890160208a016119e2565b61073060408a018a611a08565b8a606001356040518a63ffffffff1660e01b815260040161075999989796959493929190611a74565b600060405180830381600087803b15801561077357600080fd5b505af1158015610787573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516107bb9190611b7d565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83166107f1576107ec82826109cd565b505050565b6107ec838383610a3a565b600082808203610838576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561084760018561197e565b81811061085657610856611c90565b90506020028101906108689190611cbf565b610879906080810190606001611cfd565b9050600061088682610aa8565b905073ffffffffffffffffffffffffffffffffffffffff82166108b0576108ad348261197e565b90505b60006108bc8888610af3565b90506108c88888610bff565b6108d58a89898985610c6c565b6000826108e185610aa8565b6108eb919061197e565b905089811015610936576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d15600160005114171661099357637939f4246000526004601cfd5b600060605260405250505050565b6107ec8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61101e565b73ffffffffffffffffffffffffffffffffffffffff8216610a1a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61053b73ffffffffffffffffffffffffffffffffffffffff831682611131565b73ffffffffffffffffffffffffffffffffffffffff8216610a87576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107ec73ffffffffffffffffffffffffffffffffffffffff8416838361114d565b600073ffffffffffffffffffffffffffffffffffffffff821615610aeb57610ae673ffffffffffffffffffffffffffffffffffffffff83163061119c565b610aed565b475b92915050565b60608160008167ffffffffffffffff811115610b1157610b11611621565b604051908082528060200260200182016040528015610b3a578160200160208202803683370190505b5090506000805b83811015610bf457868682818110610b5b57610b5b611c90565b9050602002810190610b6d9190611cbf565b610b7e906080810190606001611cfd565b9150610b8982610aa8565b838281518110610b9b57610b9b611c90565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610bec5734838281518110610bd457610bd4611c90565b60200260200101818151610be8919061197e565b9052505b600101610b41565b509095945050505050565b60005b818110156107ec5736838383818110610c1d57610c1d611c90565b9050602002810190610c2f9190611cbf565b9050610c4160e0820160c08301611d18565b15610c6357610c63610c596060830160408401611cfd565b82608001356104ac565b50600101610c02565b838383838260018114610f395760008585610c8860018561197e565b818110610c9757610c97611c90565b9050602002810190610ca99190611cbf565b610cba906080810190606001611cfd565b9050600089815b81811015610e6557368d8d83818110610cdc57610cdc611c90565b9050602002810190610cee9190611cbf565b9050610d1d610d036060830160408401611cfd565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610d805750610d80610d366040830160208401611cfd565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610d975750610d97610d366020830183611cfd565b8015610e1c5750610e1c610dae60a0830183611a08565b610dbd91600491600091611d33565b610dc691611d5d565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610e52576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e5c8f826111d1565b50600101610cc1565b505060005b610e7560018561197e565b811015610f31576000888883818110610e9057610e90611c90565b9050602002810190610ea29190611cbf565b610eb3906080810190606001611cfd565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610f2857858281518110610efa57610efa611c90565b6020026020010151610f0b82610aa8565b610f15919061197e565b92508215610f2857610f288188856107c7565b50600101610e6a565b505050611012565b8760005b8181101561100f57368b8b83818110610f5857610f58611c90565b9050602002810190610f6a9190611cbf565b9050610f7f610d036060830160408401611cfd565b80610f985750610f98610d366040830160208401611cfd565b8015610faf5750610faf610d366020830183611cfd565b8015610fc65750610fc6610dae60a0830183611a08565b610ffc576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110068d826111d1565b50600101610f3d565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661106b576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156110e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111049190611da5565b101561112b5761112b73ffffffffffffffffffffffffffffffffffffffff851684836114ae565b50505050565b60003860003884865af161053b5763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716611192576390b8ec186000526004601cfd5b6000603452505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b6111e66111e16020830183611cfd565b611538565b61121c576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6080810135600081900361125c576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611271610d036060850160408601611cfd565b61127c576000611282565b82608001355b9050600061129e6112996060860160408701611cfd565b610aa8565b905060006112b56112996080870160608801611cfd565b9050826000036112ec576112ec6112d26060870160408801611cfd565b6112e26040880160208901611cfd565b87608001356109a1565b8460800135821015611337576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161092d565b6000806113476020880188611cfd565b73ffffffffffffffffffffffffffffffffffffffff168561136b60a08a018a611a08565b604051611379929190611dbe565b60006040518083038185875af1925050503d80600081146113b6576040519150601f19603f3d011682016040523d82523d6000602084013e6113bb565b606091505b5091509150816113ce576113ce81611617565b60006113e361129960808a0160608b01611cfd565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961141460208b018b611cfd565b61142460608c0160408d01611cfd565b61143460808d0160608e01611cfd565b8c608001358987116114465786611450565b6114508a8861197e565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d1560016000511417166111925760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d15600160005114171661119257633e3f8f736000526004601cfd5b604080516003808252818301909252600091829182917fef0100000000000000000000000000000000000000000000000000000000000091839160208201818036833701905050863b945090507fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4706003600060208401893c863f935060006115bf83611dce565b90507fffffff0000000000000000000000000000000000000000000000000000000000808516908216036115fb57506001979650505050505050565b60008611801561160b5750818514155b98975050505050505050565b8051602082018181fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561167457611674611621565b60405290565b600082601f83011261168b57600080fd5b813567ffffffffffffffff808211156116a6576116a6611621565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156116ec576116ec611621565b8160405283815286602085880101111561170557600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461174957600080fd5b919050565b8035801515811461174957600080fd5b6000610140828403121561177157600080fd5b611779611650565b905081358152602082013567ffffffffffffffff8082111561179a57600080fd5b6117a68583860161167a565b602084015260408401359150808211156117bf57600080fd5b506117cc8482850161167a565b6040830152506117de60608301611725565b60608201526117ef60808301611725565b608082015261180060a08301611725565b60a082015260c082013560c082015260e082013560e082015261010061182781840161174e565b9082015261012061183983820161174e565b9082015292915050565b60006080828403121561185557600080fd5b50919050565b6000806040838503121561186e57600080fd5b823567ffffffffffffffff8082111561188657600080fd5b6118928683870161175e565b935060208501359150808211156118a857600080fd5b506118b585828601611843565b9150509250929050565b600080600080606085870312156118d557600080fd5b843567ffffffffffffffff808211156118ed57600080fd5b6118f98883890161175e565b9550602087013591508082111561190f57600080fd5b818701915087601f83011261192357600080fd5b81358181111561193257600080fd5b8860208260051b850101111561194757600080fd5b60208301955080945050604087013591508082111561196557600080fd5b5061197287828801611843565b91505092959194509250565b81810381811115610aed577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000602082840312156119ca57600080fd5b81358060070b81146119db57600080fd5b9392505050565b6000602082840312156119f457600080fd5b813563ffffffff811681146119db57600080fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611a3d57600080fd5b83018035915067ffffffffffffffff821115611a5857600080fd5b602001915036819003821315611a6d57600080fd5b9250929050565b600061010073ffffffffffffffffffffffffffffffffffffffff808d168452808c166020850152508960408401528860608401528760070b608084015263ffffffff871660a08401528060c0840152848184015250610120848682850137600083860182015260e083019390935250601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690910101979650505050505050565b6000815180845260005b81811015611b3f57602081850181015186830182015201611b23565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081528151602082015260006020830151610140806040850152611ba6610160850183611b19565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152611be18382611b19565b9250506060850151611c0b608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120611c7e8187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611cf357600080fd5b9190910192915050565b600060208284031215611d0f57600080fd5b6119db82611725565b600060208284031215611d2a57600080fd5b6119db8261174e565b60008085851115611d4357600080fd5b83861115611d5057600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015611d9d5780818660040360031b1b83161692505b505092915050565b600060208284031215611db757600080fd5b5051919050565b8183823760009101908152919050565b6000815160208301517fffffff000000000000000000000000000000000000000000000000000000000080821693506003831015611e165780818460030360031b1b83161693505b50505091905056fea264697066735822122047316929cb6d69eee1d466f474f1391b01d09c3a4f8ba1006cda4af08237e01664736f6c63430008110033";
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
        readonly name: "startBridgeTokensViaAcross";
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
            readonly internalType: "struct AcrossFacet.AcrossData";
            readonly components: readonly [{
                readonly name: "relayerFeePct";
                readonly type: "int64";
                readonly internalType: "int64";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "maxCount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaAcross";
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
            readonly internalType: "struct AcrossFacet.AcrossData";
            readonly components: readonly [{
                readonly name: "relayerFeePct";
                readonly type: "int64";
                readonly internalType: "int64";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "maxCount";
                readonly type: "uint256";
                readonly internalType: "uint256";
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
    static createInterface(): AcrossFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AcrossFacet;
}
export {};
