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
    static readonly bytecode = "0x60a060405234801561001057600080fd5b50604051611cd2380380611cd283398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b608051611c40610092600039600081816105fd01526106280152611c406000f3fe6080604052600436106100295760003560e01c80632541ec571461002e578063ad673d8814610043575b600080fd5b61004161003c3660046116ff565b610056565b005b610041610051366004611763565b61027f565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e23447611822565b9050846101078160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561013e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361017c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101b9576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156101f7576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610235576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024788608001518960c001516104ac565b6102518888610561565b5047915050818111156102735761027360008461026e8585611822565b61072d565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102fa576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061030b3447611822565b90508680610100015161034a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610388576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886103ab8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103e2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610420576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361045d576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104728a600001518b60c001518b8b33610763565b60c08b01526104818a88610561565b50479150508181111561049e5761049e60008461026e8585611822565b505060009091555050505050565b806000036104e6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661053f578034101561053b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b61053b73ffffffffffffffffffffffffffffffffffffffff83163330846108ab565b46600114801561059e5750608082015173ffffffffffffffffffffffffffffffffffffffff16733155ba85d5f96b2d030a4966af206230e46849cb145b156105d5576040517fa6fbe3b300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015173ffffffffffffffffffffffffffffffffffffffff8116158061062657610626827f00000000000000000000000000000000000000000000000000000000000000008660c00151610908565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166344bc937b8261066e576000610674565b8560c001515b610681602087018761185c565b608088015160c089015161069860208a018a61187e565b8a604001356040518863ffffffff1660e01b81526004016106be969594939291906118ea565b6000604051808303818588803b1580156106d757600080fd5b505af11580156106eb573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18460405161071f91906119d4565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff83161561075957610754838383610934565b505050565b61075482826109a2565b60008280820361079f576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856107ae600185611822565b8181106107bd576107bd611ae7565b90506020028101906107cf9190611b16565b6107e090608081019060600161185c565b905060006107ed82610a0f565b905073ffffffffffffffffffffffffffffffffffffffff8216610817576108143482611822565b90505b60006108238888610a5a565b905061082f8888610b66565b61083c8a89898985610bd3565b60008261084885610a0f565b6108529190611822565b90508981101561089d576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d1560016000511417166108fa57637939f4246000526004601cfd5b600060605260405250505050565b6107548383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610f85565b73ffffffffffffffffffffffffffffffffffffffff8216610981576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61075473ffffffffffffffffffffffffffffffffffffffff84168383611098565b73ffffffffffffffffffffffffffffffffffffffff82166109ef576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61053b73ffffffffffffffffffffffffffffffffffffffff8316826110e7565b600073ffffffffffffffffffffffffffffffffffffffff821615610a5257610a4d73ffffffffffffffffffffffffffffffffffffffff831630611103565b610a54565b475b92915050565b60608160008167ffffffffffffffff811115610a7857610a786114c5565b604051908082528060200260200182016040528015610aa1578160200160208202803683370190505b5090506000805b83811015610b5b57868682818110610ac257610ac2611ae7565b9050602002810190610ad49190611b16565b610ae590608081019060600161185c565b9150610af082610a0f565b838281518110610b0257610b02611ae7565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610b535734838281518110610b3b57610b3b611ae7565b60200260200101818151610b4f9190611822565b9052505b600101610aa8565b509095945050505050565b60005b818110156107545736838383818110610b8457610b84611ae7565b9050602002810190610b969190611b16565b9050610ba860e0820160c08301611b54565b15610bca57610bca610bc0606083016040840161185c565b82608001356104ac565b50600101610b69565b838383838260018114610ea05760008585610bef600185611822565b818110610bfe57610bfe611ae7565b9050602002810190610c109190611b16565b610c2190608081019060600161185c565b9050600089815b81811015610dcc57368d8d83818110610c4357610c43611ae7565b9050602002810190610c559190611b16565b9050610c84610c6a606083016040840161185c565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610ce75750610ce7610c9d604083016020840161185c565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610cfe5750610cfe610c9d602083018361185c565b8015610d835750610d83610d1560a083018361187e565b610d2491600491600091611b6f565b610d2d91611b99565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610db9576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610dc38f82611138565b50600101610c28565b505060005b610ddc600185611822565b811015610e98576000888883818110610df757610df7611ae7565b9050602002810190610e099190611b16565b610e1a90608081019060600161185c565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610e8f57858281518110610e6157610e61611ae7565b6020026020010151610e7282610a0f565b610e7c9190611822565b92508215610e8f57610e8f81888561072d565b50600101610dd1565b505050610f79565b8760005b81811015610f7657368b8b83818110610ebf57610ebf611ae7565b9050602002810190610ed19190611b16565b9050610ee6610c6a606083016040840161185c565b80610eff5750610eff610c9d604083016020840161185c565b8015610f165750610f16610c9d602083018361185c565b8015610f2d5750610f2d610d1560a083018361187e565b610f63576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f6d8d82611138565b50600101610ea4565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610fd2576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611047573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061106b9190611be1565b10156110925761109273ffffffffffffffffffffffffffffffffffffffff85168483611415565b50505050565b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d1560016000511417166110dd576390b8ec186000526004601cfd5b6000603452505050565b60003860003884865af161053b5763b12d13eb6000526004601cfd5b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b61114d611148602083018361185c565b61149f565b611183576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036111c3576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006111d8610c6a606085016040860161185c565b6111e35760006111e9565b82608001355b90506000611205611200606086016040870161185c565b610a0f565b9050600061121c611200608087016060880161185c565b90508260000361125357611253611239606087016040880161185c565b611249604088016020890161185c565b8760800135610908565b846080013582101561129e576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610894565b6000806112ae602088018861185c565b73ffffffffffffffffffffffffffffffffffffffff16856112d260a08a018a61187e565b6040516112e0929190611bfa565b60006040518083038185875af1925050503d806000811461131d576040519150601f19603f3d011682016040523d82523d6000602084013e611322565b606091505b50915091508161133557611335816114bb565b600061134a61120060808a0160608b0161185c565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961137b60208b018b61185c565b61138b60608c0160408d0161185c565b61139b60808d0160608e0161185c565b8c608001358987116113ad57866113b7565b6113b78a88611822565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d1560016000511417166110dd5760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d1560016000511417166110dd57633e3f8f736000526004601cfd5b6000813f8181158015906114b35750808214155b949350505050565b8051602082018181fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611518576115186114c5565b60405290565b600082601f83011261152f57600080fd5b813567ffffffffffffffff8082111561154a5761154a6114c5565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611590576115906114c5565b816040528381528660208588010111156115a957600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff811681146115ed57600080fd5b919050565b803580151581146115ed57600080fd5b6000610140828403121561161557600080fd5b61161d6114f4565b905081358152602082013567ffffffffffffffff8082111561163e57600080fd5b61164a8583860161151e565b6020840152604084013591508082111561166357600080fd5b506116708482850161151e565b604083015250611682606083016115c9565b6060820152611693608083016115c9565b60808201526116a460a083016115c9565b60a082015260c082013560c082015260e082013560e08201526101006116cb8184016115f2565b908201526101206116dd8382016115f2565b9082015292915050565b6000606082840312156116f957600080fd5b50919050565b6000806040838503121561171257600080fd5b823567ffffffffffffffff8082111561172a57600080fd5b61173686838701611602565b9350602085013591508082111561174c57600080fd5b50611759858286016116e7565b9150509250929050565b6000806000806060858703121561177957600080fd5b843567ffffffffffffffff8082111561179157600080fd5b61179d88838901611602565b955060208701359150808211156117b357600080fd5b818701915087601f8301126117c757600080fd5b8135818111156117d657600080fd5b8860208260051b85010111156117eb57600080fd5b60208301955080945050604087013591508082111561180957600080fd5b50611816878288016116e7565b91505092959194509250565b81810381811115610a54577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006020828403121561186e57600080fd5b611877826115c9565b9392505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126118b357600080fd5b83018035915067ffffffffffffffff8211156118ce57600080fd5b6020019150368190038213156118e357600080fd5b9250929050565b600073ffffffffffffffffffffffffffffffffffffffff808916835280881660208401525085604083015260a060608301528360a0830152838560c0840137600060c0858401015260c07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8601168301019050826080830152979650505050505050565b6000815180845260005b818110156119965760208185018101518683018201520161197a565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b6020815281516020820152600060208301516101408060408501526119fd610160850183611970565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152611a388382611970565b9250506060850151611a62608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120611ad58187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611b4a57600080fd5b9190910192915050565b600060208284031215611b6657600080fd5b611877826115f2565b60008085851115611b7f57600080fd5b83861115611b8c57600080fd5b5050820193919092039150565b7fffffffff000000000000000000000000000000000000000000000000000000008135818116916004851015611bd95780818660040360031b1b83161692505b505092915050565b600060208284031215611bf357600080fd5b5051919050565b818382376000910190815291905056fea2646970667358221220b5039738c31eb866705d687d3a2cda47004ec0a59aec18f8632b6d9bbc09c2f364736f6c63430008110033";
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
