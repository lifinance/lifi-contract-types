import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ThorSwapFacet, ThorSwapFacetInterface } from "../ThorSwapFacet";
declare type ThorSwapFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ThorSwapFacet__factory extends ContractFactory {
    constructor(...args: ThorSwapFacetConstructorParams);
    deploy(_thorchainRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ThorSwapFacet>;
    getDeployTransaction(_thorchainRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ThorSwapFacet;
    connect(signer: Signer): ThorSwapFacet__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b50604051611cd7380380611cd783398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b608051611c45610092600039600081816105fd01526106280152611c456000f3fe6080604052600436106100295760003560e01c80632541ec571461002e578063ad673d8814610043575b600080fd5b61004161003c366004611704565b610056565b005b610041610051366004611768565b61027f565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447611827565b9050846101078160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561013e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361017c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101b9576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156101f7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610235576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024788608001518960c001516104ac565b6102518888610561565b5047915050818111156102735761027360008461026e8585611827565b61072d565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102fa576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061030b3447611827565b90508680610100015161034a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610388576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886103ab8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103e2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610420576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361045d576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104728a600001518b60c001518b8b33610762565b60c08b01526104818a88610561565b50479150508181111561049e5761049e60008461026e8585611827565b505060009091555050505050565b806000036104e6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661053f578034101561053b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61053b73ffffffffffffffffffffffffffffffffffffffff83163330846108aa565b46600114801561059e5750608082015173ffffffffffffffffffffffffffffffffffffffff16733155ba85d5f96b2d030a4966af206230e46849cb145b156105d5576040517fa6fbe3b300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015173ffffffffffffffffffffffffffffffffffffffff8116158061062657610626827f00000000000000000000000000000000000000000000000000000000000000008660c00151610907565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166344bc937b8261066e576000610674565b8560c001515b6106816020870187611861565b608088015160c089015161069860208a018a611883565b8a604001356040518863ffffffff1660e01b81526004016106be969594939291906118ef565b6000604051808303818588803b1580156106d757600080fd5b505af11580156106eb573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18460405161071f91906119d9565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff8316610757576107528282610933565b505050565b6107528383836109a0565b60008280820361079e576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856107ad600185611827565b8181106107bc576107bc611aec565b90506020028101906107ce9190611b1b565b6107df906080810190606001611861565b905060006107ec82610a0e565b905073ffffffffffffffffffffffffffffffffffffffff8216610816576108133482611827565b90505b60006108228888610a59565b905061082e8888610b65565b61083b8a89898985610bd2565b60008261084785610a0e565b6108519190611827565b90508981101561089c576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d1560016000511417166108f957637939f4246000526004601cfd5b600060605260405250505050565b6107528383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610f84565b73ffffffffffffffffffffffffffffffffffffffff8216610980576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61053b73ffffffffffffffffffffffffffffffffffffffff831682611097565b73ffffffffffffffffffffffffffffffffffffffff82166109ed576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61075273ffffffffffffffffffffffffffffffffffffffff841683836110b3565b600073ffffffffffffffffffffffffffffffffffffffff821615610a5157610a4c73ffffffffffffffffffffffffffffffffffffffff831630611102565b610a53565b475b92915050565b60608160008167ffffffffffffffff811115610a7757610a776114ca565b604051908082528060200260200182016040528015610aa0578160200160208202803683370190505b5090506000805b83811015610b5a57868682818110610ac157610ac1611aec565b9050602002810190610ad39190611b1b565b610ae4906080810190606001611861565b9150610aef82610a0e565b838281518110610b0157610b01611aec565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610b525734838281518110610b3a57610b3a611aec565b60200260200101818151610b4e9190611827565b9052505b600101610aa7565b509095945050505050565b60005b818110156107525736838383818110610b8357610b83611aec565b9050602002810190610b959190611b1b565b9050610ba760e0820160c08301611b59565b15610bc957610bc9610bbf6060830160408401611861565b82608001356104ac565b50600101610b68565b838383838260018114610e9f5760008585610bee600185611827565b818110610bfd57610bfd611aec565b9050602002810190610c0f9190611b1b565b610c20906080810190606001611861565b9050600089815b81811015610dcb57368d8d83818110610c4257610c42611aec565b9050602002810190610c549190611b1b565b9050610c83610c696060830160408401611861565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610ce65750610ce6610c9c6040830160208401611861565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610cfd5750610cfd610c9c6020830183611861565b8015610d825750610d82610d1460a0830183611883565b610d2391600491600091611b74565b610d2c91611b9e565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610db8576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610dc28f82611137565b50600101610c27565b505060005b610ddb600185611827565b811015610e97576000888883818110610df657610df6611aec565b9050602002810190610e089190611b1b565b610e19906080810190606001611861565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610e8e57858281518110610e6057610e60611aec565b6020026020010151610e7182610a0e565b610e7b9190611827565b92508215610e8e57610e8e81888561072d565b50600101610dd0565b505050610f78565b8760005b81811015610f7557368b8b83818110610ebe57610ebe611aec565b9050602002810190610ed09190611b1b565b9050610ee5610c696060830160408401611861565b80610efe5750610efe610c9c6040830160208401611861565b8015610f155750610f15610c9c6020830183611861565b8015610f2c5750610f2c610d1460a0830183611883565b610f62576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f6c8d82611137565b50600101610ea3565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610fd1576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611046573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061106a9190611be6565b10156110915761109173ffffffffffffffffffffffffffffffffffffffff85168483611436565b50505050565b60003860003884865af161053b5763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d1560016000511417166110f8576390b8ec186000526004601cfd5b6000603452505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b61116e6111476020830183611861565b3f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470141590565b6111a4576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036111e4576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006111f9610c696060850160408601611861565b61120457600061120a565b82608001355b905060006112266112216060860160408701611861565b610a0e565b9050600061123d6112216080870160608801611861565b9050826000036112745761127461125a6060870160408801611861565b61126a6040880160208901611861565b8760800135610907565b84608001358210156112bf576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610893565b6000806112cf6020880188611861565b73ffffffffffffffffffffffffffffffffffffffff16856112f360a08a018a611883565b604051611301929190611bff565b60006040518083038185875af1925050503d806000811461133e576040519150601f19603f3d011682016040523d82523d6000602084013e611343565b606091505b50915091508161135657611356816114c0565b600061136b61122160808a0160608b01611861565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961139c60208b018b611861565b6113ac60608c0160408d01611861565b6113bc60808d0160608e01611861565b8c608001358987116113ce57866113d8565b6113d88a88611827565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d1560016000511417166110f85760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d1560016000511417166110f857633e3f8f736000526004601cfd5b8051602082018181fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561151d5761151d6114ca565b60405290565b600082601f83011261153457600080fd5b813567ffffffffffffffff8082111561154f5761154f6114ca565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611595576115956114ca565b816040528381528660208588010111156115ae57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff811681146115f257600080fd5b919050565b803580151581146115f257600080fd5b6000610140828403121561161a57600080fd5b6116226114f9565b905081358152602082013567ffffffffffffffff8082111561164357600080fd5b61164f85838601611523565b6020840152604084013591508082111561166857600080fd5b5061167584828501611523565b604083015250611687606083016115ce565b6060820152611698608083016115ce565b60808201526116a960a083016115ce565b60a082015260c082013560c082015260e082013560e08201526101006116d08184016115f7565b908201526101206116e28382016115f7565b9082015292915050565b6000606082840312156116fe57600080fd5b50919050565b6000806040838503121561171757600080fd5b823567ffffffffffffffff8082111561172f57600080fd5b61173b86838701611607565b9350602085013591508082111561175157600080fd5b5061175e858286016116ec565b9150509250929050565b6000806000806060858703121561177e57600080fd5b843567ffffffffffffffff8082111561179657600080fd5b6117a288838901611607565b955060208701359150808211156117b857600080fd5b818701915087601f8301126117cc57600080fd5b8135818111156117db57600080fd5b8860208260051b85010111156117f057600080fd5b60208301955080945050604087013591508082111561180e57600080fd5b5061181b878288016116ec565b91505092959194509250565b81810381811115610a53577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006020828403121561187357600080fd5b61187c826115ce565b9392505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126118b857600080fd5b83018035915067ffffffffffffffff8211156118d357600080fd5b6020019150368190038213156118e857600080fd5b9250929050565b600073ffffffffffffffffffffffffffffffffffffffff808916835280881660208401525085604083015260a060608301528360a0830152838560c0840137600060c0858401015260c07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8601168301019050826080830152979650505050505050565b6000815180845260005b8181101561199b5760208185018101518683018201520161197f565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081528151602082015260006020830151610140806040850152611a02610160850183611975565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152611a3d8382611975565b9250506060850151611a67608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120611ada8187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611b4f57600080fd5b9190910192915050565b600060208284031215611b6b57600080fd5b61187c826115f7565b60008085851115611b8457600080fd5b83861115611b9157600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015611bde5780818660040360031b1b83161692505b505092915050565b600060208284031215611bf857600080fd5b5051919050565b818382376000910190815291905056fea2646970667358221220bb3d4c0c36445e025dd863825ffd29ad10054e973b9308b9630a1c1a9b7a913964736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_thorchainRouter";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaThorSwap";
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
            readonly name: "_thorSwapData";
            readonly type: "tuple";
            readonly internalType: "struct ThorSwapFacet.ThorSwapData";
            readonly components: readonly [{
                readonly name: "vault";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "memo";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "expiration";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaThorSwap";
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
            readonly name: "_thorSwapData";
            readonly type: "tuple";
            readonly internalType: "struct ThorSwapFacet.ThorSwapData";
            readonly components: readonly [{
                readonly name: "vault";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "memo";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "expiration";
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
        readonly name: "DeprecatedToken";
        readonly inputs: readonly [];
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
    static createInterface(): ThorSwapFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ThorSwapFacet;
}
export {};
