import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LiFiVaultWrapperFactory, LiFiVaultWrapperFactoryInterface } from "../LiFiVaultWrapperFactory";
type LiFiVaultWrapperFactoryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LiFiVaultWrapperFactory__factory extends ContractFactory {
    constructor(...args: LiFiVaultWrapperFactoryConstructorParams);
    deploy(_beacon: PromiseOrValue<string>, _owner: PromiseOrValue<string>, _emergencyPauser: PromiseOrValue<string>, _onboardingManager: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LiFiVaultWrapperFactory>;
    getDeployTransaction(_beacon: PromiseOrValue<string>, _owner: PromiseOrValue<string>, _emergencyPauser: PromiseOrValue<string>, _onboardingManager: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LiFiVaultWrapperFactory;
    connect(signer: Signer): LiFiVaultWrapperFactory__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161234538038061234583398101604081905261002e91610130565b5f80546001600160a01b0319166001600160a01b03858116919091179091558416158061006257506001600160a01b038316155b8061007457506001600160a01b038216155b8061008657506001600160a01b038116155b156100a45760405163d92e233d60e01b815260040160405180910390fd5b836001600160a01b03163b5f036100ce576040516303777f6960e51b815260040160405180910390fd5b6001600160a01b03938416608052600280549285166001600160a01b03199384161790556003805491909416911617909155506008805461ffff1916611f40179055610181565b80516001600160a01b038116811461012b575f5ffd5b919050565b5f5f5f5f60808587031215610143575f5ffd5b61014c85610115565b935061015a60208601610115565b925061016860408601610115565b915061017660608601610115565b905092959194509250565b60805161219e6101a75f395f818161029e01528181610a670152610f91015261219e5ff3fe608060405234801561000f575f5ffd5b50600436106101b0575f3560e01c80638da5cb5b116100f3578063dadf672111610093578063f12d54d81161006e578063f12d54d81461043b578063f294e72b14610443578063f2fde38b14610464578063fec7e26f14610477575f5ffd5b8063dadf6721146103d9578063e30c3978146103fb578063f0882a021461041b575f5ffd5b8063c9445e98116100ce578063c9445e9814610376578063ce190578146103ab578063da26fac0146103b3578063dab297c3146103c6575f5ffd5b80638da5cb5b146103225780639a07d5cf14610341578063c312204414610363575f5ffd5b8063431a20ae1161015e57806361a552dc1161013957806361a552dc146102c05780636b44e6be146102e55780637200b829146103075780637b0e24e11461030f575f5ffd5b8063431a20ae146102545780634c9255391461028657806359659e9014610299575f5ffd5b806336b62f601161018e57806336b62f601461021b5780633d312f6d1461022e5780633e70838b14610241575f5ffd5b8063065b3adf146101b457806319ac9736146101fe57806323452b9c14610213575b5f5ffd5b6002546101d49073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61021161020c366004611da5565b6104bf565b005b6102116105e6565b6101d4610229366004611dd8565b6106af565b61021161023c366004611da5565b610c80565b61021161024f366004611e10565b610df8565b610276610262366004611e10565b60066020525f908152604090205460ff1681565b60405190151581526020016101f5565b6101d4610294366004611e2b565b610f36565b6101d47f000000000000000000000000000000000000000000000000000000000000000081565b6003546102769074010000000000000000000000000000000000000000900460ff1681565b6102766102f3366004611e10565b600a6020525f908152604090205460ff1681565b610211610fc0565b61021161031d366004611e98565b6110a4565b5f546101d49073ffffffffffffffffffffffffffffffffffffffff1681565b61027661034f366004611e10565b60046020525f908152604090205460ff1681565b610211610371366004611ed8565b61123c565b6101d4610384366004611ef1565b60096020525f908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b610211611333565b6102116103c1366004611da5565b6113e4565b6102116103d4366004611e10565b611504565b6102766103e7366004611e10565b60056020525f908152604090205460ff1681565b6001546101d49073ffffffffffffffffffffffffffffffffffffffff1681565b6003546101d49073ffffffffffffffffffffffffffffffffffffffff1681565b610211611642565b6008546104519061ffff1681565b60405161ffff90911681526020016101f5565b610211610472366004611e10565b611705565b6104a4610485366004611f08565b60076020525f908152604090205461ffff808216916201000090041682565b6040805161ffff9384168152929091166020830152016101f5565b5f5473ffffffffffffffffffffffffffffffffffffffff16331461050f576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661055c576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82165f8181526004602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591519182527fb5d3cf05733bee0c2f095eab8b623df94643cf558a55635853484e57ea121efe91015b60405180910390a25050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610636576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610685576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6003545f9073ffffffffffffffffffffffffffffffffffffffff16331461077357335f9081526005602052604090205460ff16610718576040517ff91cf59a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b336107266020840184611e10565b73ffffffffffffffffffffffffffffffffffffffff1614610773576040517f7d5f7a4b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6107816020840184611e10565b73ffffffffffffffffffffffffffffffffffffffff16036107ce576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60065f6107e16040850160208601611e10565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040015f205460ff16610840576040517fb33ef95c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60045f6108536060850160408601611e10565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040015f205460ff166108b2576040517f11a89e1300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6108db6108c66040850160208601611e10565b6108d66060860160408701611e10565b611861565b90506108e983608001611947565b5f6108fc6101a085016101808601611ed8565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000161ffff821601610936575060085461ffff16610976565b61271061ffff82161115610976576040517fbcd55b0f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610a046109876020870187611e10565b6109976040880160208901611e10565b6109a76060890160408a01611e10565b88606001356040805173ffffffffffffffffffffffffffffffffffffffff958616602080830191909152948616818301529290941660608301526080808301919091528351808303909101815260a0909101909252815191012090565b5f8181526009602052604090205490915073ffffffffffffffffffffffffffffffffffffffff1615610a62576040517f1144626f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a8c7f000000000000000000000000000000000000000000000000000000000000000082611b47565b5f82815260096020908152604080832080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff86169081179091558352600a9091529081902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055909450610b249060608701908701611e10565b73ffffffffffffffffffffffffffffffffffffffff16610b476020870187611e10565b73ffffffffffffffffffffffffffffffffffffffff9081169086167fbc004aa5d8629027cb8e94e6018dcc26aa71bcfd13e898ef3419fa7ce6fc20f0610b9360408a0160208b01611e10565b6040805173ffffffffffffffffffffffffffffffffffffffff90921682526060808c013560208401529082018790520160405180910390a473ffffffffffffffffffffffffffffffffffffffff8416630f2da77684610bf86060890160408a01611e10565b610c0860408a0160208b01611e10565b610c1560208b018b611e10565b8760808c01610c286101a08e018e611f21565b6040518963ffffffff1660e01b8152600401610c4b989796959493929190611fd0565b5f604051808303815f87803b158015610c62575f5ffd5b505af1158015610c74573d5f5f3e3d5ffd5b50505050505050919050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610cd0576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d1d576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b808015610d3f575073ffffffffffffffffffffffffffffffffffffffff82163b155b15610d76576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82165f8181526006602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591519182527fdacbec7f25e70cdd1eaa994eb11bdc2111ba9390a91b97157c4be55bd041f19b91016105da565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610e48576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610e95576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff000000000000000000000000000000000000000083168117909355604080519190921680825260208201939093527f62c67cb852e451f36ab720db75ef4514bb68a3897d1a5c81c9a83b7c98000a73917f542077e5b1a280f97367adbe30588ff00d9d42b623131f3648274d900b7e494a91016105da565b6040805173ffffffffffffffffffffffffffffffffffffffff80871660208084019190915281871683850152908516606083015260808083018590528351808403909101815260a090920190925280519101205f90610fb7907f00000000000000000000000000000000000000000000000000000000000000009030611b5a565b95945050505050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114611012576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146110f4576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8061ffff168261ffff161180611119575061110e83611c14565b61ffff168161ffff16115b15611150576040517f0a66d87e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405180604001604052808361ffff1681526020018261ffff1681525060075f856003811115611182576111826120da565b6003811115611193576111936120da565b81526020808201929092526040015f2082518154939092015161ffff90811662010000027fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000009094169216919091179190911790558260038111156111f9576111f96120da565b6040805161ffff8086168252841660208201527f58a99e194f4926b065a0e8cc5503ba78c961fce1af721753b7f8fbee69527904910160405180910390a2505050565b5f5473ffffffffffffffffffffffffffffffffffffffff16331461128c576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61271061ffff821611156112cc576040517fbcd55b0f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600880547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00001661ffff83169081179091556040519081527fe9d378251065314555dd1d11e56697a0860c87c2a577ec0f09e96dab9ff560709060200160405180910390a150565b60025473ffffffffffffffffffffffffffffffffffffffff163314611384576040517fafb38e8000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600380547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1690556040515f815233907fe9eaa3315e98979840fe905a13da4c74e5e7a612fdd5d7cb5b2fac0e79191ea0906020015b60405180910390a2565b60035473ffffffffffffffffffffffffffffffffffffffff163314611435576040517f28e3c67e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611482576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82165f8181526005602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591519182527fcfe7691facd4ee55ee5bafdace0a5147e021812d1650c94f2617355a8056c46e91016105da565b5f5473ffffffffffffffffffffffffffffffffffffffff163314611554576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166115a1576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6003805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff000000000000000000000000000000000000000083168117909355604080519190921680825260208201939093527fba1ff1325c30c26aadd0c969267e4cddaa9f65a37b17807e4ac55ef73fd5a3a8917f542077e5b1a280f97367adbe30588ff00d9d42b623131f3648274d900b7e494a91016105da565b60025473ffffffffffffffffffffffffffffffffffffffff163314611693576040517fafb38e8000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600380547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000001790556040516001815233907fe9eaa3315e98979840fe905a13da4c74e5e7a612fdd5d7cb5b2fac0e79191ea0906020016113da565b5f5473ffffffffffffffffffffffffffffffffffffffff163314611755576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166117a2576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216036117f1576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b6040517fae1c160c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301525f919084169063ae1c160c90602401602060405180830381865afa1580156118ce573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906118f29190612107565b905073ffffffffffffffffffffffffffffffffffffffff8116611941576040517fa650953c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b92915050565b5f5b60048160ff161015611b4357816080018160ff166004811061196d5761196d612122565b602002016020810190611980919061214f565b6119ec578160ff82166004811061199957611999612122565b6020020160208101906119ac9190611ed8565b61ffff16156119e7576040517fd9f1b37700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611b3b565b5f8260ff831660048110611a0257611a02612122565b602002016020810190611a159190611ed8565b9050611a348260ff166003811115611a2f57611a2f6120da565b611c14565b61ffff168161ffff161115611a75576040517f3811c92b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f60075f8460ff166003811115611a8e57611a8e6120da565b6003811115611a9f57611a9f6120da565b6003811115611ab057611ab06120da565b815260208082019290925260409081015f2081518083019092525461ffff808216808452620100009092048116938301939093529092509083161080611b015750806020015161ffff168261ffff16115b15611b38576040517f1310ac1700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505b600101611949565b5050565b5f611b535f8484611c83565b9392505050565b604080517fb3582b35133d50545afa5036515af43d6000803e604d573d6000fd5b3d6000f360609081527f1b60e01b36527fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6c83527660195155f3363d3d373d3d363d602036600436635c60da60205273ffffffffffffffffffffffffffffffffffffffff86167c60523d8160223d39730000000000000000000000000000000000000000176009526074600c20919092525f91829052610fb7818585611d4e565b5f80826003811115611c2857611c286120da565b03611c365750611388919050565b6001826003811115611c4a57611c4a6120da565b03611c5857506103e8919050565b6002826003811115611c6c57611c6c6120da565b03611c7a57506107d0919050565b506107d0919050565b604080517fb3582b35133d50545afa5036515af43d6000803e604d573d6000fd5b3d6000f36060527f1b60e01b36527fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6c9091527660195155f3363d3d373d3d363d602036600436635c60da6020527c60523d8160223d3973000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff8416176009525f90826074600c87f5915081611d405763301164255f526004601cfd5b6040525f6060529392505050565b5f60ff5f5350603592835260601b60015260155260555f908120915290565b73ffffffffffffffffffffffffffffffffffffffff81168114611d8e575f5ffd5b50565b80358015158114611da0575f5ffd5b919050565b5f5f60408385031215611db6575f5ffd5b8235611dc181611d6d565b9150611dcf60208401611d91565b90509250929050565b5f60208284031215611de8575f5ffd5b813567ffffffffffffffff811115611dfe575f5ffd5b82016101c08185031215611b53575f5ffd5b5f60208284031215611e20575f5ffd5b8135611b5381611d6d565b5f5f5f5f60808587031215611e3e575f5ffd5b8435611e4981611d6d565b93506020850135611e5981611d6d565b92506040850135611e6981611d6d565b9396929550929360600135925050565b803560048110611da0575f5ffd5b803561ffff81168114611da0575f5ffd5b5f5f5f60608486031215611eaa575f5ffd5b611eb384611e79565b9250611ec160208501611e87565b9150611ecf60408501611e87565b90509250925092565b5f60208284031215611ee8575f5ffd5b611b5382611e87565b5f60208284031215611f01575f5ffd5b5035919050565b5f60208284031215611f18575f5ffd5b611b5382611e79565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611f54575f5ffd5b83018035915067ffffffffffffffff821115611f6e575f5ffd5b602001915036819003821315611f82575f5ffd5b9250929050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b73ffffffffffffffffffffffffffffffffffffffff8916815273ffffffffffffffffffffffffffffffffffffffff8816602082015273ffffffffffffffffffffffffffffffffffffffff8716604082015273ffffffffffffffffffffffffffffffffffffffff8616606082015261ffff851660808201525f60a08201855f5b600481101561207a5761ffff61206483611e87565b168352602092830192919091019060010161204f565b5050506101208201608086015f5b60048110156120b15761209a82611d91565b151583526020928301929190910190600101612088565b5050506101c06101a08301526120cc6101c083018486611f89565b9a9950505050505050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b5f60208284031215612117575f5ffd5b8151611b5381611d6d565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f6020828403121561215f575f5ffd5b611b5382611d9156fea26469706673582212206a0ec45c108f214c230ff7f02e86637e60a66177ddde998489a237ce90163f9c64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_beacon";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_emergencyPauser";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_onboardingManager";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "allowedUnderlying";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "approvedAdapter";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "approvedIntegrator";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "beacon";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "cancelOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "confirmOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "defaultIntegratorShareBps";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "deploy";
        readonly inputs: readonly [{
            readonly name: "_params";
            readonly type: "tuple";
            readonly internalType: "struct DeployParams";
            readonly components: readonly [{
                readonly name: "integrator";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "adapter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "underlying";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "fees";
                readonly type: "tuple";
                readonly internalType: "struct FeeConfig";
                readonly components: readonly [{
                    readonly name: "rateBps";
                    readonly type: "uint16[4]";
                    readonly internalType: "uint16[4]";
                }, {
                    readonly name: "enabled";
                    readonly type: "bool[4]";
                    readonly internalType: "bool[4]";
                }];
            }, {
                readonly name: "integratorShareBps";
                readonly type: "uint16";
                readonly internalType: "uint16";
            }, {
                readonly name: "initData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "instance";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "emergencyPauser";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "feeBounds";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint8";
            readonly internalType: "enum FeeType";
        }];
        readonly outputs: readonly [{
            readonly name: "minBps";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "maxBps";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "globalPause";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "globalPaused";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "globalUnpause";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "instanceBySalt";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isInstance";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "onboardingManager";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "owner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pendingOwner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "predictAddress";
        readonly inputs: readonly [{
            readonly name: "_integrator";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_adapter";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_underlying";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_nonce";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "setAdapterApproved";
        readonly inputs: readonly [{
            readonly name: "_adapter";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_approved";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setDefaultSplit";
        readonly inputs: readonly [{
            readonly name: "_integratorBps";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setEmergencyPauser";
        readonly inputs: readonly [{
            readonly name: "_newPauser";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setFeeBounds";
        readonly inputs: readonly [{
            readonly name: "_feeType";
            readonly type: "uint8";
            readonly internalType: "enum FeeType";
        }, {
            readonly name: "_minBps";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "_maxBps";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setIntegratorApproved";
        readonly inputs: readonly [{
            readonly name: "_integrator";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_approved";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setOnboardingManager";
        readonly inputs: readonly [{
            readonly name: "_newManager";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "setUnderlyingAllowed";
        readonly inputs: readonly [{
            readonly name: "_underlying";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_allowed";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "transferOwnership";
        readonly inputs: readonly [{
            readonly name: "_newOwner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "AdapterApprovedSet";
        readonly inputs: readonly [{
            readonly name: "adapter";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "approved";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "DefaultSplitSet";
        readonly inputs: readonly [{
            readonly name: "integratorBps";
            readonly type: "uint16";
            readonly indexed: false;
            readonly internalType: "uint16";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "FeeBoundsSet";
        readonly inputs: readonly [{
            readonly name: "feeType";
            readonly type: "uint8";
            readonly indexed: true;
            readonly internalType: "enum FeeType";
        }, {
            readonly name: "minBps";
            readonly type: "uint16";
            readonly indexed: false;
            readonly internalType: "uint16";
        }, {
            readonly name: "maxBps";
            readonly type: "uint16";
            readonly indexed: false;
            readonly internalType: "uint16";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "GlobalPauseSet";
        readonly inputs: readonly [{
            readonly name: "paused";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }, {
            readonly name: "by";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "IntegratorApprovedSet";
        readonly inputs: readonly [{
            readonly name: "integrator";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "approved";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferRequested";
        readonly inputs: readonly [{
            readonly name: "_from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferred";
        readonly inputs: readonly [{
            readonly name: "previousOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "RoleRotated";
        readonly inputs: readonly [{
            readonly name: "role";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "oldAddr";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "newAddr";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "UnderlyingAllowedSet";
        readonly inputs: readonly [{
            readonly name: "underlying";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "allowed";
            readonly type: "bool";
            readonly indexed: false;
            readonly internalType: "bool";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "WrapperDeployed";
        readonly inputs: readonly [{
            readonly name: "instance";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "integrator";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "underlying";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "adapter";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "nonce";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "salt";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "AdapterNotApproved";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "AssetResolutionFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "DisabledFeeMustBeZero";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "FeeRateAboveBound";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "FeeRateAboveCap";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InstanceAlreadyExists";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "IntegratorMismatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "IntegratorNotApproved";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidFeeBounds";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidSplit";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NewOwnerMustNotBeSelf";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoNullOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoPendingOwnershipTransfer";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotEmergencyPauser";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotOnboardingManager";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotPendingOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnderlyingNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ZeroAddress";
        readonly inputs: readonly [];
    }];
    static createInterface(): LiFiVaultWrapperFactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LiFiVaultWrapperFactory;
}
export {};
