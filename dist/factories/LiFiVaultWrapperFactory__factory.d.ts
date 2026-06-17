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
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161259138038061259183398101604081905261002e9161019e565b5f80546001600160a01b0319166001600160a01b03858116919091179091558416158061006257506001600160a01b038316155b8061007457506001600160a01b038216155b8061008657506001600160a01b038116155b156100a4576040516306b7c75960e31b815260040160405180910390fd5b836001600160a01b03163b5f036100ce576040516303777f6960e51b815260040160405180910390fd5b6001600160a01b03848116608052600280546001600160a01b031990811685841617909155600380549091169183169190911790555f5b60048160ff161015610179576107d060075f8360ff16600381111561012c5761012c6101ef565b600381111561013d5761013d6101ef565b600381111561014e5761014e6101ef565b815260208101919091526040015f20805461ffff191661ffff92909216919091179055600101610105565b5050505050610203565b80516001600160a01b0381168114610199575f5ffd5b919050565b5f5f5f5f608085870312156101b1575f5ffd5b6101ba85610183565b93506101c860208601610183565b92506101d660408601610183565b91506101e460608601610183565b905092959194509250565b634e487b7160e01b5f52602160045260245ffd5b6080516123686102295f395f8181610279015281816107bd015261128e01526123685ff3fe608060405234801561000f575f5ffd5b50600436106101bb575f3560e01c80639e11b887116100f3578063dadf672111610093578063f0882a021161006e578063f0882a0214610460578063f12d54d814610480578063f2fde38b14610488578063fec7e26f1461049b575f5ffd5b8063dadf67211461040d578063dd4d313c1461042f578063e30c397814610440575f5ffd5b8063c9445e98116100ce578063c9445e98146103aa578063ce190578146103df578063da26fac0146103e7578063dab297c3146103fa575f5ffd5b80639e11b8871461034e5780639f05bf8014610384578063bcd33f0514610397575f5ffd5b806359659e901161015e5780637200b829116101395780637200b829146102f25780637b0e24e1146102fa5780638da5cb5b1461030d5780639a07d5cf1461032c575f5ffd5b806359659e901461027457806361a552dc1461029b5780636b44e6be146102d0575f5ffd5b806323452b9c1161019957806323452b9c146102315780633c2aa6fd146102395780633e70838b1461025957806352c228e31461026c575f5ffd5b806304831331146101bf578063065b3adf146101fc57806319ac97361461021c575b5f5ffd5b6101d26101cd366004611e36565b6104e3565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6002546101d29073ffffffffffffffffffffffffffffffffffffffff1681565b61022f61022a366004611ea1565b6109e1565b005b61022f610b08565b61024c610247366004611ed4565b610bd1565b6040516101f39190611ef4565b61022f610267366004611f4c565b610cf1565b61024c610e2f565b6101d27f000000000000000000000000000000000000000000000000000000000000000081565b6003546102c09074010000000000000000000000000000000000000000900460ff1681565b60405190151581526020016101f3565b6102c06102de366004611f4c565b60096020525f908152604090205460ff1681565b61022f610e9c565b61022f610308366004611f86565b610f80565b5f546101d29073ffffffffffffffffffffffffffffffffffffffff1681565b6102c061033a366004611f4c565b60046020525f908152604090205460ff1681565b61037161035c366004611fc6565b60076020525f908152604090205461ffff1681565b60405161ffff90911681526020016101f3565b61022f610392366004611fdf565b611118565b6101d26103a5366004612007565b61123b565b6101d26103b8366004612045565b60086020525f908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b61022f6112bc565b61022f6103f5366004611ea1565b61136d565b61022f610408366004611f4c565b61148d565b6102c061041b366004611f4c565b60056020525f908152604090205460ff1681565b600a546040519081526020016101f3565b6001546101d29073ffffffffffffffffffffffffffffffffffffffff1681565b6003546101d29073ffffffffffffffffffffffffffffffffffffffff1681565b61022f6115cb565b61022f610496366004611f4c565b61168e565b6104c86104a9366004611fc6565b60066020525f908152604090205461ffff808216916201000090041682565b6040805161ffff9384168152929091166020830152016101f3565b6003545f9073ffffffffffffffffffffffffffffffffffffffff1633146105a757335f9081526005602052604090205460ff1661054c576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3361055a6020840184611f4c565b73ffffffffffffffffffffffffffffffffffffffff16146105a7576040517f7d5f7a4b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6105b56020840184611f4c565b73ffffffffffffffffffffffffffffffffffffffff1603610602576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60045f6106156040850160208601611f4c565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040015f205460ff16610674576040517f11a89e1300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61068d6106886040850160208601611f4c565b6117ea565b90506040830135158015906106a6575046836040013514155b156106dd576040517fd05df1a200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106e983608001611a07565b5f61075a6106fa6020860186611f4c565b61070a6040870160208801611f4c565b6040805173ffffffffffffffffffffffffffffffffffffffff9384166020808301919091529290931683820152606080890135848201528151808503909101815260809093019052815191012090565b5f8181526008602052604090205490915073ffffffffffffffffffffffffffffffffffffffff16156107b8576040517f1144626f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107e27f000000000000000000000000000000000000000000000000000000000000000082611c07565b5f828152600860209081526040808320805473ffffffffffffffffffffffffffffffffffffffff86167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092558185526009845282852080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001908117909155600a805491820181559095527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a89094018054909416179092559194506108b591908601908601611f4c565b73ffffffffffffffffffffffffffffffffffffffff166108d86020860186611f4c565b60408051818801358152606080890135602083015291810185905273ffffffffffffffffffffffffffffffffffffffff928316928716917f7e002026260a53eadfb5e2fe3811563d42253ea6651e6d1299eb3cc652ddda3a910160405180910390a473ffffffffffffffffffffffffffffffffffffffff8316630fedbeab836109676040880160208901611f4c565b6109746020890189611f4c565b604089013560808a0161098b6101808c018c61205c565b6040518863ffffffff1660e01b81526004016109ad979695949392919061210b565b5f604051808303815f87803b1580156109c4575f5ffd5b505af11580156109d6573d5f5f3e3d5ffd5b505050505050919050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610a31576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a7e576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82165f8181526004602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591519182527fb5d3cf05733bee0c2f095eab8b623df94643cf558a55635853484e57ea121efe91015b60405180910390a25050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610b58576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610ba7576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b600a54606090808410610bf3575050604080515f815260208101909152610ceb565b5f610bfe848661224e565b905081811115610c0b5750805b610c158582612261565b67ffffffffffffffff811115610c2d57610c2d6121f4565b604051908082528060200260200182016040528015610c56578160200160208202803683370190505b5092505f5b8351811015610ce757600a610c70828861224e565b81548110610c8057610c80612274565b905f5260205f20015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16848281518110610cba57610cba612274565b73ffffffffffffffffffffffffffffffffffffffff90921660209283029190910190910152600101610c5b565b5050505b92915050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610d41576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610d8e576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff000000000000000000000000000000000000000083168117909355604080519190921680825260208201939093527f62c67cb852e451f36ab720db75ef4514bb68a3897d1a5c81c9a83b7c98000a73917f542077e5b1a280f97367adbe30588ff00d9d42b623131f3648274d900b7e494a9101610afc565b6060600a805480602002602001604051908101604052809291908181526020018280548015610e9257602002820191905f5260205f20905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610e67575b5050505050905090565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610eee576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610fd0576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8061ffff168261ffff161180610ff55750610fea83611c1a565b61ffff168161ffff16115b1561102c576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405180604001604052808361ffff1681526020018261ffff1681525060065f85600381111561105e5761105e6122a1565b600381111561106f5761106f6122a1565b81526020808201929092526040015f2082518154939092015161ffff90811662010000027fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000009094169216919091179190911790558260038111156110d5576110d56122a1565b6040805161ffff8086168252841660208201527f58a99e194f4926b065a0e8cc5503ba78c961fce1af721753b7f8fbee69527904910160405180910390a2505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314611168576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61271061ffff821611156111a8576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060075f8460038111156111be576111be6122a1565b60038111156111cf576111cf6122a1565b81526020019081526020015f205f6101000a81548161ffff021916908361ffff160217905550816003811115611207576112076122a1565b60405161ffff831681527fbf8f77c89b52aad0b3fea52669de1fbe519b355b6736437df57e913f51c8d70690602001610afc565b6040805173ffffffffffffffffffffffffffffffffffffffff80861660208084019190915290851682840152606080830185905283518084039091018152608090920190925280519101205f906112b4907f00000000000000000000000000000000000000000000000000000000000000009030611c89565b949350505050565b60025473ffffffffffffffffffffffffffffffffffffffff16331461130d576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600380547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1690556040515f815233907fe9eaa3315e98979840fe905a13da4c74e5e7a612fdd5d7cb5b2fac0e79191ea0906020015b60405180910390a2565b60035473ffffffffffffffffffffffffffffffffffffffff1633146113be576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661140b576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82165f8181526005602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591519182527fcfe7691facd4ee55ee5bafdace0a5147e021812d1650c94f2617355a8056c46e9101610afc565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146114dd576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811661152a576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6003805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff000000000000000000000000000000000000000083168117909355604080519190921680825260208201939093527fba1ff1325c30c26aadd0c969267e4cddaa9f65a37b17807e4ac55ef73fd5a3a8917f542077e5b1a280f97367adbe30588ff00d9d42b623131f3648274d900b7e494a9101610afc565b60025473ffffffffffffffffffffffffffffffffffffffff16331461161c576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600380547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000001790556040516001815233907fe9eaa3315e98979840fe905a13da4c74e5e7a612fdd5d7cb5b2fac0e79191ea090602001611363565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146116de576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811661172b576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82160361177a576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b5f8173ffffffffffffffffffffffffffffffffffffffff163b5f0361183b576040517f7955c0d400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff166338d52e0f6040518163ffffffff1660e01b8152600401602060405180830381865afa9250505080156118c0575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526118bd918101906122ce565b60015b6118f6576040517f7955c0d400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116611943576040517f7955c0d400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b90508173ffffffffffffffffffffffffffffffffffffffff166301e1d1146040518163ffffffff1660e01b8152600401602060405180830381865afa9250505080156119ca575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526119c7918101906122e9565b60015b611a00576040517f7955c0d400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505b919050565b5f5b60048160ff161015611c0357816080018160ff1660048110611a2d57611a2d612274565b602002016020810190611a409190612300565b611aac578160ff821660048110611a5957611a59612274565b602002016020810190611a6c9190612319565b61ffff1615611aa7576040517fd9f1b37700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611bfb565b5f8260ff831660048110611ac257611ac2612274565b602002016020810190611ad59190612319565b9050611af48260ff166003811115611aef57611aef6122a1565b611c1a565b61ffff168161ffff161115611b35576040517f3811c92b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f60065f8460ff166003811115611b4e57611b4e6122a1565b6003811115611b5f57611b5f6122a1565b6003811115611b7057611b706122a1565b815260208082019290925260409081015f2081518083019092525461ffff808216808452620100009092048116938301939093529092509083161080611bc15750806020015161ffff168261ffff16115b15611bf8576040517f1310ac1700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505b600101611a09565b5050565b5f611c135f8484611d4c565b9392505050565b5f80826003811115611c2e57611c2e6122a1565b03611c3c5750611388919050565b6001826003811115611c5057611c506122a1565b03611c5e57506103e8919050565b6002826003811115611c7257611c726122a1565b03611c8057506107d0919050565b506107d0919050565b604080517fb3582b35133d50545afa5036515af43d6000803e604d573d6000fd5b3d6000f360609081527f1b60e01b36527fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6c83527660195155f3363d3d373d3d363d602036600436635c60da60205273ffffffffffffffffffffffffffffffffffffffff86167c60523d8160223d39730000000000000000000000000000000000000000176009526074600c20919092525f91829052611d43818585611e17565b95945050505050565b604080517fb3582b35133d50545afa5036515af43d6000803e604d573d6000fd5b3d6000f36060527f1b60e01b36527fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6c9091527660195155f3363d3d373d3d363d602036600436635c60da6020527c60523d8160223d3973000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff8416176009525f90826074600c87f5915081611e095763301164255f526004601cfd5b6040525f6060529392505050565b5f60ff5f5350603592835260601b60015260155260555f908120915290565b5f60208284031215611e46575f5ffd5b813567ffffffffffffffff811115611e5c575f5ffd5b82016101a08185031215611c13575f5ffd5b73ffffffffffffffffffffffffffffffffffffffff81168114611e8f575f5ffd5b50565b80358015158114611a02575f5ffd5b5f5f60408385031215611eb2575f5ffd5b8235611ebd81611e6e565b9150611ecb60208401611e92565b90509250929050565b5f5f60408385031215611ee5575f5ffd5b50508035926020909101359150565b602080825282518282018190525f918401906040840190835b81811015611f4157835173ffffffffffffffffffffffffffffffffffffffff16835260209384019390920191600101611f0d565b509095945050505050565b5f60208284031215611f5c575f5ffd5b8135611c1381611e6e565b803560048110611a02575f5ffd5b803561ffff81168114611a02575f5ffd5b5f5f5f60608486031215611f98575f5ffd5b611fa184611f67565b9250611faf60208501611f75565b9150611fbd60408501611f75565b90509250925092565b5f60208284031215611fd6575f5ffd5b611c1382611f67565b5f5f60408385031215611ff0575f5ffd5b611ff983611f67565b9150611ecb60208401611f75565b5f5f5f60608486031215612019575f5ffd5b833561202481611e6e565b9250602084013561203481611e6e565b929592945050506040919091013590565b5f60208284031215612055575f5ffd5b5035919050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261208f575f5ffd5b83018035915067ffffffffffffffff8211156120a9575f5ffd5b6020019150368190038213156120bd575f5ffd5b9250929050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b73ffffffffffffffffffffffffffffffffffffffff8816815273ffffffffffffffffffffffffffffffffffffffff8716602082015273ffffffffffffffffffffffffffffffffffffffff861660408201528460608201525f60808201855f5b60048110156121955761ffff61217f83611f75565b168352602092830192919091019060010161216a565b5050506101008201608086015f5b60048110156121cc576121b582611e92565b1515835260209283019291909101906001016121a3565b5050506101a06101808301526121e76101a0830184866120c4565b9998505050505050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b80820180821115610ceb57610ceb612221565b81810381811115610ceb57610ceb612221565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b5f602082840312156122de575f5ffd5b8151611c1381611e6e565b5f602082840312156122f9575f5ffd5b5051919050565b5f60208284031215612310575f5ffd5b611c1382611e92565b5f60208284031215612329575f5ffd5b611c1382611f7556fea26469706673582212203e646e98414c150d95c560a25e175a1d0cdff660a55f38df4cfdb0d8fafa702a64736f6c634300081d0033";
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
        readonly name: "getInstances";
        readonly inputs: readonly [{
            readonly name: "_offset";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "_limit";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "page";
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
