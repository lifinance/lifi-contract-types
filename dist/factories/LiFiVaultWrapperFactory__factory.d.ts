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
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b506040516123be3803806123be83398101604081905261002e9161018c565b5f80546001600160a01b0319166001600160a01b03858116919091179091558416158061006257506001600160a01b038216155b8061007457506001600160a01b038116155b15610092576040516306b7c75960e31b815260040160405180910390fd5b836001600160a01b03163b5f036100bc576040516303777f6960e51b815260040160405180910390fd5b6001600160a01b03848116608052600280546001600160a01b031990811685841617909155600380549091169183169190911790555f5b60048160ff161015610167576107d060075f8360ff16600381111561011a5761011a6101dd565b600381111561012b5761012b6101dd565b600381111561013c5761013c6101dd565b815260208101919091526040015f20805461ffff191661ffff929092169190911790556001016100f3565b50505050506101f1565b80516001600160a01b0381168114610187575f5ffd5b919050565b5f5f5f5f6080858703121561019f575f5ffd5b6101a885610171565b93506101b660208601610171565b92506101c460408601610171565b91506101d260608601610171565b905092959194509250565b634e487b7160e01b5f52602160045260245ffd5b6080516121a76102175f395f8181610266015281816107cd015261116d01526121a75ff3fe608060405234801561000f575f5ffd5b50600436106101bb575f3560e01c80639f05bf80116100f3578063dadf672111610093578063f0882a021161006e578063f0882a0214610470578063f12d54d814610490578063f2fde38b14610498578063fec7e26f146104ab575f5ffd5b8063dadf67211461041d578063dd4d313c1461043f578063e30c397814610450575f5ffd5b8063c9445e98116100ce578063c9445e98146103ba578063ce190578146103ef578063da26fac0146103f7578063dab297c31461040a575f5ffd5b80639f05bf8014610371578063b714fa3e14610384578063bcd33f05146103a7575f5ffd5b806361a552dc1161015e5780637b0e24e1116101395780637b0e24e1146102e75780638da5cb5b146102fa5780639a07d5cf146103195780639e11b8871461033b575f5ffd5b806361a552dc146102885780636b44e6be146102bd5780637200b829146102df575f5ffd5b806323452b9c1161019957806323452b9c146102315780633e70838b1461023957806352c228e31461024c57806359659e9014610261575f5ffd5b806304831331146101bf578063065b3adf146101fc57806319ac97361461021c575b5f5ffd5b6101d26101cd366004611d15565b6104f3565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6002546101d29073ffffffffffffffffffffffffffffffffffffffff1681565b61022f61022a366004611d80565b6109e0565b005b61022f610b07565b61022f610247366004611db3565b610bd0565b610254610d0e565b6040516101f39190611dce565b6101d27f000000000000000000000000000000000000000000000000000000000000000081565b6003546102ad9074010000000000000000000000000000000000000000900460ff1681565b60405190151581526020016101f3565b6102ad6102cb366004611db3565b60096020525f908152604090205460ff1681565b61022f610d7b565b61022f6102f5366004611e45565b610e5f565b5f546101d29073ffffffffffffffffffffffffffffffffffffffff1681565b6102ad610327366004611db3565b60046020525f908152604090205460ff1681565b61035e610349366004611e85565b60076020525f908152604090205461ffff1681565b60405161ffff90911681526020016101f3565b61022f61037f366004611e9e565b610ff7565b60035474010000000000000000000000000000000000000000900460ff166102ad565b6101d26103b5366004611ec6565b61111a565b6101d26103c8366004611f04565b60086020525f908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b61022f61119b565b61022f610405366004611d80565b61124c565b61022f610418366004611db3565b61136c565b6102ad61042b366004611db3565b60056020525f908152604090205460ff1681565b600a546040519081526020016101f3565b6001546101d29073ffffffffffffffffffffffffffffffffffffffff1681565b6003546101d29073ffffffffffffffffffffffffffffffffffffffff1681565b61022f6114aa565b61022f6104a6366004611db3565b61156d565b6104d86104b9366004611e85565b60066020525f908152604090205461ffff808216916201000090041682565b6040805161ffff9384168152929091166020830152016101f3565b6003545f9073ffffffffffffffffffffffffffffffffffffffff1633146105b757335f9081526005602052604090205460ff1661055c576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3361056a6020840184611db3565b73ffffffffffffffffffffffffffffffffffffffff16146105b7576040517f7d5f7a4b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6105c56020840184611db3565b73ffffffffffffffffffffffffffffffffffffffff1603610612576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60045f6106256040850160208601611db3565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040015f205460ff16610684576040517f11a89e1300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61069d6106986040850160208601611db3565b6116c9565b90506040830135158015906106b6575046836040013514155b156106ed576040517fd05df1a200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106f9836080016118e6565b5f61076a61070a6020860186611db3565b61071a6040870160208801611db3565b6040805173ffffffffffffffffffffffffffffffffffffffff9384166020808301919091529290931683820152606080890135848201528151808503909101815260809093019052815191012090565b5f8181526008602052604090205490915073ffffffffffffffffffffffffffffffffffffffff16156107c8576040517f1144626f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107f27f000000000000000000000000000000000000000000000000000000000000000082611ae6565b5f828152600860209081526040808320805473ffffffffffffffffffffffffffffffffffffffff86167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092558185526009845282852080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001908117909155600a805491820181559095527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a8909401805490941681179093559295509091630fedbeab9185916108d091908901908901611db3565b6108dd6020890189611db3565b604089013560808a016108f46101808c018c611f1b565b6040518863ffffffff1660e01b81526004016109169796959493929190611fca565b5f604051808303815f87803b15801561092d575f5ffd5b505af115801561093f573d5f5f3e3d5ffd5b50610954925050506040850160208601611db3565b73ffffffffffffffffffffffffffffffffffffffff166109776020860186611db3565b60408051818801358152606080890135602083015291810185905273ffffffffffffffffffffffffffffffffffffffff928316928716917f7e002026260a53eadfb5e2fe3811563d42253ea6651e6d1299eb3cc652ddda3a910160405180910390a45050919050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610a30576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a7d576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82165f8181526004602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591519182527fb5d3cf05733bee0c2f095eab8b623df94643cf558a55635853484e57ea121efe91015b60405180910390a25050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610b57576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610ba6576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610c20576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610c6d576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff000000000000000000000000000000000000000083168117909355604080519190921680825260208201939093527f62c67cb852e451f36ab720db75ef4514bb68a3897d1a5c81c9a83b7c98000a73917f542077e5b1a280f97367adbe30588ff00d9d42b623131f3648274d900b7e494a9101610afb565b6060600a805480602002602001604051908101604052809291908181526020018280548015610d7157602002820191905f5260205f20905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610d46575b5050505050905090565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610dcd576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610eaf576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8061ffff168261ffff161180610ed45750610ec983611af9565b61ffff168161ffff16115b15610f0b576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405180604001604052808361ffff1681526020018261ffff1681525060065f856003811115610f3d57610f3d6120b3565b6003811115610f4e57610f4e6120b3565b81526020808201929092526040015f2082518154939092015161ffff90811662010000027fffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000909416921691909117919091179055826003811115610fb457610fb46120b3565b6040805161ffff8086168252841660208201527f58a99e194f4926b065a0e8cc5503ba78c961fce1af721753b7f8fbee69527904910160405180910390a2505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314611047576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61271061ffff82161115611087576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060075f84600381111561109d5761109d6120b3565b60038111156110ae576110ae6120b3565b81526020019081526020015f205f6101000a81548161ffff021916908361ffff1602179055508160038111156110e6576110e66120b3565b60405161ffff831681527fbf8f77c89b52aad0b3fea52669de1fbe519b355b6736437df57e913f51c8d70690602001610afb565b6040805173ffffffffffffffffffffffffffffffffffffffff80861660208084019190915290851682840152606080830185905283518084039091018152608090920190925280519101205f90611193907f00000000000000000000000000000000000000000000000000000000000000009030611b68565b949350505050565b60025473ffffffffffffffffffffffffffffffffffffffff1633146111ec576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600380547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1690556040515f815233907fe9eaa3315e98979840fe905a13da4c74e5e7a612fdd5d7cb5b2fac0e79191ea0906020015b60405180910390a2565b60035473ffffffffffffffffffffffffffffffffffffffff16331461129d576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166112ea576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82165f8181526005602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591519182527fcfe7691facd4ee55ee5bafdace0a5147e021812d1650c94f2617355a8056c46e9101610afb565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146113bc576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116611409576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6003805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff000000000000000000000000000000000000000083168117909355604080519190921680825260208201939093527fba1ff1325c30c26aadd0c969267e4cddaa9f65a37b17807e4ac55ef73fd5a3a8917f542077e5b1a280f97367adbe30588ff00d9d42b623131f3648274d900b7e494a9101610afb565b60025473ffffffffffffffffffffffffffffffffffffffff1633146114fb576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600380547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000001790556040516001815233907fe9eaa3315e98979840fe905a13da4c74e5e7a612fdd5d7cb5b2fac0e79191ea090602001611242565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146115bd576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811661160a576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603611659576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b5f8173ffffffffffffffffffffffffffffffffffffffff163b5f0361171a576040517f7955c0d400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff166338d52e0f6040518163ffffffff1660e01b8152600401602060405180830381865afa92505050801561179f575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261179c918101906120e0565b60015b6117d5576040517f7955c0d400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116611822576040517f7955c0d400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b90508173ffffffffffffffffffffffffffffffffffffffff166301e1d1146040518163ffffffff1660e01b8152600401602060405180830381865afa9250505080156118a9575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526118a6918101906120fb565b60015b6118df576040517f7955c0d400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b919050565b5f5b60048160ff161015611ae257816080018160ff166004811061190c5761190c612112565b60200201602081019061191f919061213f565b61198b578160ff82166004811061193857611938612112565b60200201602081019061194b9190612158565b61ffff1615611986576040517fd9f1b37700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611ada565b5f8260ff8316600481106119a1576119a1612112565b6020020160208101906119b49190612158565b90506119d38260ff1660038111156119ce576119ce6120b3565b611af9565b61ffff168161ffff161115611a14576040517f3811c92b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f60065f8460ff166003811115611a2d57611a2d6120b3565b6003811115611a3e57611a3e6120b3565b6003811115611a4f57611a4f6120b3565b815260208082019290925260409081015f2081518083019092525461ffff808216808452620100009092048116938301939093529092509083161080611aa05750806020015161ffff168261ffff16115b15611ad7576040517f1310ac1700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505b6001016118e8565b5050565b5f611af25f8484611c2b565b9392505050565b5f80826003811115611b0d57611b0d6120b3565b03611b1b5750611388919050565b6001826003811115611b2f57611b2f6120b3565b03611b3d57506103e8919050565b6002826003811115611b5157611b516120b3565b03611b5f57506107d0919050565b506107d0919050565b604080517fb3582b35133d50545afa5036515af43d6000803e604d573d6000fd5b3d6000f360609081527f1b60e01b36527fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6c83527660195155f3363d3d373d3d363d602036600436635c60da60205273ffffffffffffffffffffffffffffffffffffffff86167c60523d8160223d39730000000000000000000000000000000000000000176009526074600c20919092525f91829052611c22818585611cf6565b95945050505050565b604080517fb3582b35133d50545afa5036515af43d6000803e604d573d6000fd5b3d6000f36060527f1b60e01b36527fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6c9091527660195155f3363d3d373d3d363d602036600436635c60da6020527c60523d8160223d3973000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff8416176009525f90826074600c87f5915081611ce85763301164255f526004601cfd5b6040525f6060529392505050565b5f60ff5f5350603592835260601b60015260155260555f908120915290565b5f60208284031215611d25575f5ffd5b813567ffffffffffffffff811115611d3b575f5ffd5b82016101a08185031215611af2575f5ffd5b73ffffffffffffffffffffffffffffffffffffffff81168114611d6e575f5ffd5b50565b803580151581146118e1575f5ffd5b5f5f60408385031215611d91575f5ffd5b8235611d9c81611d4d565b9150611daa60208401611d71565b90509250929050565b5f60208284031215611dc3575f5ffd5b8135611af281611d4d565b602080825282518282018190525f918401906040840190835b81811015611e1b57835173ffffffffffffffffffffffffffffffffffffffff16835260209384019390920191600101611de7565b509095945050505050565b8035600481106118e1575f5ffd5b803561ffff811681146118e1575f5ffd5b5f5f5f60608486031215611e57575f5ffd5b611e6084611e26565b9250611e6e60208501611e34565b9150611e7c60408501611e34565b90509250925092565b5f60208284031215611e95575f5ffd5b611af282611e26565b5f5f60408385031215611eaf575f5ffd5b611eb883611e26565b9150611daa60208401611e34565b5f5f5f60608486031215611ed8575f5ffd5b8335611ee381611d4d565b92506020840135611ef381611d4d565b929592945050506040919091013590565b5f60208284031215611f14575f5ffd5b5035919050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611f4e575f5ffd5b83018035915067ffffffffffffffff821115611f68575f5ffd5b602001915036819003821315611f7c575f5ffd5b9250929050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b73ffffffffffffffffffffffffffffffffffffffff8816815273ffffffffffffffffffffffffffffffffffffffff8716602082015273ffffffffffffffffffffffffffffffffffffffff861660408201528460608201525f60808201855f5b60048110156120545761ffff61203e83611e34565b1683526020928301929190910190600101612029565b5050506101008201608086015f5b600481101561208b5761207482611d71565b151583526020928301929190910190600101612062565b5050506101a06101808301526120a66101a083018486611f83565b9998505050505050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b5f602082840312156120f0575f5ffd5b8151611af281611d4d565b5f6020828403121561210b575f5ffd5b5051919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f6020828403121561214f575f5ffd5b611af282611d71565b5f60208284031215612168575f5ffd5b611af282611e3456fea2646970667358221220ecd491c9148084f9f0989f3671dc85cb38f570266ff9969a598f2926e2c5da7e64736f6c634300081d0033";
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
        readonly name: "defaultLifiShareBps";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "uint8";
            readonly internalType: "enum FeeType";
        }];
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
                readonly name: "underlying";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "chainLockId";
                readonly type: "uint256";
                readonly internalType: "uint256";
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
        readonly name: "getAllInstances";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address[]";
            readonly internalType: "address[]";
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
        readonly name: "instancesLength";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isGlobalPaused";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
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
        readonly name: "setDefaultSplit";
        readonly inputs: readonly [{
            readonly name: "_feeType";
            readonly type: "uint8";
            readonly internalType: "enum FeeType";
        }, {
            readonly name: "_lifiBps";
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
        readonly name: "DefaultSplitSet";
        readonly inputs: readonly [{
            readonly name: "feeType";
            readonly type: "uint8";
            readonly indexed: true;
            readonly internalType: "enum FeeType";
        }, {
            readonly name: "lifiBps";
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
            readonly name: "chainLockId";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
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
        readonly name: "ChainLockMismatch";
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
        readonly name: "InvalidConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
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
        readonly name: "UnderlyingProbeFailed";
        readonly inputs: readonly [];
    }];
    static createInterface(): LiFiVaultWrapperFactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LiFiVaultWrapperFactory;
}
export {};
