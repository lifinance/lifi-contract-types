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
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161229738038061229783398101604081905261002e91610130565b5f80546001600160a01b0319166001600160a01b03858116919091179091558416158061006257506001600160a01b038316155b8061007457506001600160a01b038216155b8061008657506001600160a01b038116155b156100a45760405163d92e233d60e01b815260040160405180910390fd5b836001600160a01b03163b5f036100ce576040516303777f6960e51b815260040160405180910390fd5b6001600160a01b03938416608052600280549285166001600160a01b03199384161790556003805491909416911617909155506008805461ffff1916611f40179055610181565b80516001600160a01b038116811461012b575f5ffd5b919050565b5f5f5f5f60808587031215610143575f5ffd5b61014c85610115565b935061015a60208601610115565b925061016860408601610115565b915061017660608601610115565b905092959194509250565b6080516120f06101a75f395f818161028b01528181610967015261156201526120f05ff3fe608060405234801561000f575f5ffd5b50600436106101b0575f3560e01c80639a07d5cf116100f3578063e30c397811610093578063f294e72b1161006e578063f294e72b14610430578063f2fde38b14610451578063fc3f46dd14610464578063fec7e26f14610477575f5ffd5b8063e30c3978146103e8578063f0882a0214610408578063f12d54d814610428575f5ffd5b8063ce190578116100ce578063ce19057814610398578063da26fac0146103a0578063dab297c3146103b3578063dadf6721146103c6575f5ffd5b80639a07d5cf1461032e578063c312204414610350578063c9445e9814610363575f5ffd5b80634c9255391161015e5780636b44e6be116101395780636b44e6be146102d25780637200b829146102f45780637b0e24e1146102fc5780638da5cb5b1461030f575f5ffd5b80634c9255391461027357806359659e901461028657806361a552dc146102ad575f5ffd5b80633d312f6d1161018e5780633d312f6d1461021b5780633e70838b1461022e578063431a20ae14610241575f5ffd5b8063065b3adf146101b457806319ac9736146101fe57806323452b9c14610213575b5f5ffd5b6002546101d49073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61021161020c366004611d02565b6104bf565b005b6102116105e6565b610211610229366004611d02565b6106af565b61021161023c366004611d35565b6107ce565b61026361024f366004611d35565b60066020525f908152604090205460ff1681565b60405190151581526020016101f5565b6101d4610281366004611d50565b61090c565b6101d47f000000000000000000000000000000000000000000000000000000000000000081565b6003546102639074010000000000000000000000000000000000000000900460ff1681565b6102636102e0366004611d35565b600a6020525f908152604090205460ff1681565b610211610996565b61021161030a366004611dbd565b610a7a565b5f546101d49073ffffffffffffffffffffffffffffffffffffffff1681565b61026361033c366004611d35565b60046020525f908152604090205460ff1681565b61021161035e366004611dfd565b610c12565b6101d4610371366004611e16565b60096020525f908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b610211610d09565b6102116103ae366004611d02565b610dba565b6102116103c1366004611d35565b610eda565b6102636103d4366004611d35565b60056020525f908152604090205460ff1681565b6001546101d49073ffffffffffffffffffffffffffffffffffffffff1681565b6003546101d49073ffffffffffffffffffffffffffffffffffffffff1681565b610211611018565b60085461043e9061ffff1681565b60405161ffff90911681526020016101f5565b61021161045f366004611d35565b6110db565b6101d4610472366004611e2d565b611237565b6104a4610485366004611e65565b60076020525f908152604090205461ffff808216916201000090041682565b6040805161ffff9384168152929091166020830152016101f5565b5f5473ffffffffffffffffffffffffffffffffffffffff16331461050f576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661055c576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82165f8181526004602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591519182527fb5d3cf05733bee0c2f095eab8b623df94643cf558a55635853484e57ea121efe91015b60405180910390a25050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610636576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610685576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146106ff576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661074c576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82165f8181526006602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591519182527fdacbec7f25e70cdd1eaa994eb11bdc2111ba9390a91b97157c4be55bd041f19b91016105da565b5f5473ffffffffffffffffffffffffffffffffffffffff16331461081e576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811661086b576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff000000000000000000000000000000000000000083168117909355604080519190921680825260208201939093527f62c67cb852e451f36ab720db75ef4514bb68a3897d1a5c81c9a83b7c98000a73917f542077e5b1a280f97367adbe30588ff00d9d42b623131f3648274d900b7e494a91016105da565b6040805173ffffffffffffffffffffffffffffffffffffffff80871660208084019190915281871683850152908516606083015260808083018590528351808403909101815260a090920190925280519101205f9061098d907f00000000000000000000000000000000000000000000000000000000000000009030611778565b95945050505050565b60015473ffffffffffffffffffffffffffffffffffffffff163381146109e8576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610aca576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8061ffff168261ffff161180610aef5750610ae483611832565b61ffff168161ffff16115b15610b26576040517f0a66d87e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405180604001604052808361ffff1681526020018261ffff1681525060075f856003811115610b5857610b58611e7e565b6003811115610b6957610b69611e7e565b81526020808201929092526040015f2082518154939092015161ffff90811662010000027fffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000909416921691909117919091179055826003811115610bcf57610bcf611e7e565b6040805161ffff8086168252841660208201527f58a99e194f4926b065a0e8cc5503ba78c961fce1af721753b7f8fbee69527904910160405180910390a2505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610c62576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61271061ffff82161115610ca2576040517fbcd55b0f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600880547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00001661ffff83169081179091556040519081527fe9d378251065314555dd1d11e56697a0860c87c2a577ec0f09e96dab9ff560709060200160405180910390a150565b60025473ffffffffffffffffffffffffffffffffffffffff163314610d5a576040517fafb38e8000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600380547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1690556040515f815233907fe9eaa3315e98979840fe905a13da4c74e5e7a612fdd5d7cb5b2fac0e79191ea0906020015b60405180910390a2565b60035473ffffffffffffffffffffffffffffffffffffffff163314610e0b576040517f28e3c67e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610e58576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82165f8181526005602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591519182527fcfe7691facd4ee55ee5bafdace0a5147e021812d1650c94f2617355a8056c46e91016105da565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610f2a576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610f77576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6003805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff000000000000000000000000000000000000000083168117909355604080519190921680825260208201939093527fba1ff1325c30c26aadd0c969267e4cddaa9f65a37b17807e4ac55ef73fd5a3a8917f542077e5b1a280f97367adbe30588ff00d9d42b623131f3648274d900b7e494a91016105da565b60025473ffffffffffffffffffffffffffffffffffffffff163314611069576040517fafb38e8000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600380547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000001790556040516001815233907fe9eaa3315e98979840fe905a13da4c74e5e7a612fdd5d7cb5b2fac0e79191ea090602001610db0565b5f5473ffffffffffffffffffffffffffffffffffffffff16331461112b576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116611178576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216036111c7576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b6003545f9073ffffffffffffffffffffffffffffffffffffffff1633146112fb57335f9081526005602052604090205460ff166112a0576040517ff91cf59a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b336112ae6020840184611d35565b73ffffffffffffffffffffffffffffffffffffffff16146112fb576040517f7d5f7a4b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6113096020840184611d35565b73ffffffffffffffffffffffffffffffffffffffff1603611356576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60065f6113696040850160208601611d35565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040015f205460ff166113c8576040517fb33ef95c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60045f6113db6060850160408601611d35565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040015f205460ff1661143a576040517f11a89e1300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61146361144e6040850160208601611d35565b61145e6060860160408701611d35565b6118a1565b9050611471836080016119d4565b5f6114ff6114826020860186611d35565b6114926040870160208801611d35565b6114a26060880160408901611d35565b87606001356040805173ffffffffffffffffffffffffffffffffffffffff958616602080830191909152948616818301529290941660608301526080808301919091528351808303909101815260a0909101909252815191012090565b5f8181526009602052604090205490915073ffffffffffffffffffffffffffffffffffffffff161561155d576040517f1144626f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115877f000000000000000000000000000000000000000000000000000000000000000082611bd4565b5f82815260096020908152604080832080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff86169081179091558352600a9091529081902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590935061161f9060608601908601611d35565b73ffffffffffffffffffffffffffffffffffffffff166116426020860186611d35565b73ffffffffffffffffffffffffffffffffffffffff9081169085167fbc004aa5d8629027cb8e94e6018dcc26aa71bcfd13e898ef3419fa7ce6fc20f061168e6040890160208a01611d35565b6040805173ffffffffffffffffffffffffffffffffffffffff90921682526060808b013560208401529082018790520160405180910390a473ffffffffffffffffffffffffffffffffffffffff831663ed95ee99836116f36060880160408901611d35565b6117036040890160208a01611d35565b61171060208a018a611d35565b60808a016117226101808c018c611eab565b6040518863ffffffff1660e01b81526004016117449796959493929190611f5a565b5f604051808303815f87803b15801561175b575f5ffd5b505af115801561176d573d5f5f3e3d5ffd5b505050505050919050565b604080517fb3582b35133d50545afa5036515af43d6000803e604d573d6000fd5b3d6000f360609081527f1b60e01b36527fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6c83527660195155f3363d3d373d3d363d602036600436635c60da60205273ffffffffffffffffffffffffffffffffffffffff86167c60523d8160223d39730000000000000000000000000000000000000000176009526074600c20919092525f9182905261098d818585611be0565b5f8082600381111561184657611846611e7e565b036118545750611388919050565b600182600381111561186857611868611e7e565b0361187657506103e8919050565b600282600381111561188a5761188a611e7e565b0361189857506107d0919050565b506107d0919050565b6040517fae1c160c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301525f919084169063ae1c160c90602401602060405180830381865afa92505050801561194a575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261194791810190612059565b60015b611980576040517fa650953c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166119cd576040517fa650953c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b9392505050565b5f5b60048160ff161015611bd057816080018160ff16600481106119fa576119fa612074565b602002016020810190611a0d91906120a1565b611a79578160ff821660048110611a2657611a26612074565b602002016020810190611a399190611dfd565b61ffff1615611a74576040517fd9f1b37700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611bc8565b5f8260ff831660048110611a8f57611a8f612074565b602002016020810190611aa29190611dfd565b9050611ac18260ff166003811115611abc57611abc611e7e565b611832565b61ffff168161ffff161115611b02576040517f3811c92b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f60075f8460ff166003811115611b1b57611b1b611e7e565b6003811115611b2c57611b2c611e7e565b6003811115611b3d57611b3d611e7e565b815260208082019290925260409081015f2081518083019092525461ffff808216808452620100009092048116938301939093529092509083161080611b8e5750806020015161ffff168261ffff16115b15611bc5576040517f1310ac1700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505b6001016119d6565b5050565b5f6119cd5f8484611bff565b5f60ff5f5350603592835260601b60015260155260555f908120915290565b604080517fb3582b35133d50545afa5036515af43d6000803e604d573d6000fd5b3d6000f36060527f1b60e01b36527fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6c9091527660195155f3363d3d373d3d363d602036600436635c60da6020527c60523d8160223d3973000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff8416176009525f90826074600c87f5915081611cbc5763301164255f526004601cfd5b6040525f6060529392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611ceb575f5ffd5b50565b80358015158114611cfd575f5ffd5b919050565b5f5f60408385031215611d13575f5ffd5b8235611d1e81611cca565b9150611d2c60208401611cee565b90509250929050565b5f60208284031215611d45575f5ffd5b81356119cd81611cca565b5f5f5f5f60808587031215611d63575f5ffd5b8435611d6e81611cca565b93506020850135611d7e81611cca565b92506040850135611d8e81611cca565b9396929550929360600135925050565b803560048110611cfd575f5ffd5b803561ffff81168114611cfd575f5ffd5b5f5f5f60608486031215611dcf575f5ffd5b611dd884611d9e565b9250611de660208501611dac565b9150611df460408501611dac565b90509250925092565b5f60208284031215611e0d575f5ffd5b6119cd82611dac565b5f60208284031215611e26575f5ffd5b5035919050565b5f60208284031215611e3d575f5ffd5b813567ffffffffffffffff811115611e53575f5ffd5b82016101a081850312156119cd575f5ffd5b5f60208284031215611e75575f5ffd5b6119cd82611d9e565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611ede575f5ffd5b83018035915067ffffffffffffffff821115611ef8575f5ffd5b602001915036819003821315611f0c575f5ffd5b9250929050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b73ffffffffffffffffffffffffffffffffffffffff8816815273ffffffffffffffffffffffffffffffffffffffff8716602082015273ffffffffffffffffffffffffffffffffffffffff8616604082015273ffffffffffffffffffffffffffffffffffffffff851660608201525f60808201855f5b6004811015611ffa5761ffff611fe483611dac565b1683526020928301929190910190600101611fcf565b5050506101008201608086015f5b60048110156120315761201a82611cee565b151583526020928301929190910190600101612008565b5050506101a061018083015261204c6101a083018486611f13565b9998505050505050505050565b5f60208284031215612069575f5ffd5b81516119cd81611cca565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f602082840312156120b1575f5ffd5b6119cd82611cee56fea2646970667358221220b3c3b7975649ddf322315d10bc97505032ca5abaaf4fb266d121dc2ae05db03064736f6c634300081d0033";
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
