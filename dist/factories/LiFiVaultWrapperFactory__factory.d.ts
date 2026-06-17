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
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b5060405161261738038061261783398101604081905261002e91610130565b5f80546001600160a01b0319166001600160a01b03858116919091179091558416158061006257506001600160a01b038316155b8061007457506001600160a01b038216155b8061008657506001600160a01b038116155b156100a45760405163d92e233d60e01b815260040160405180910390fd5b836001600160a01b03163b5f036100ce576040516303777f6960e51b815260040160405180910390fd5b6001600160a01b03938416608052600280549285166001600160a01b03199384161790556003805491909416911617909155506008805461ffff1916611f40179055610181565b80516001600160a01b038116811461012b575f5ffd5b919050565b5f5f5f5f60808587031215610143575f5ffd5b61014c85610115565b935061015a60208601610115565b925061016860408601610115565b915061017660608601610115565b905092959194509250565b6080516124706101a75f395f81816102d401528181610ae1015261116e01526124705ff3fe608060405234801561000f575f5ffd5b50600436106101d1575f3560e01c80638da5cb5b116100fe578063dadf67211161009e578063f12d54d81161006e578063f12d54d814610495578063f294e72b1461049d578063f2fde38b146104be578063fec7e26f146104d1575f5ffd5b8063dadf672114610422578063dd4d313c14610444578063e30c397814610455578063f0882a0214610475575f5ffd5b8063c9445e98116100d9578063c9445e98146103bf578063ce190578146103f4578063da26fac0146103fc578063dab297c31461040f575f5ffd5b80638da5cb5b1461036b5780639a07d5cf1461038a578063c3122044146103ac575f5ffd5b80634c925539116101745780636b44e6be116101445780636b44e6be1461031b5780637200b8291461033d5780637b0e24e1146103455780638a1b71e114610358575f5ffd5b80634c925539146102b457806352c228e3146102c757806359659e90146102cf57806361a552dc146102f6575f5ffd5b80633c2aa6fd116101af5780633c2aa6fd1461023c5780633d312f6d1461025c5780633e70838b1461026f578063431a20ae14610282575f5ffd5b8063065b3adf146101d557806319ac97361461021f57806323452b9c14610234575b5f5ffd5b6002546101f59073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61023261022d366004611f83565b610519565b005b610232610640565b61024f61024a366004611fb6565b610709565b6040516102169190611fd6565b61023261026a366004611f83565b610829565b61023261027d36600461202e565b610948565b6102a461029036600461202e565b60066020525f908152604090205460ff1681565b6040519015158152602001610216565b6101f56102c2366004612049565b610a86565b61024f610b10565b6101f57f000000000000000000000000000000000000000000000000000000000000000081565b6003546102a49074010000000000000000000000000000000000000000900460ff1681565b6102a461032936600461202e565b600a6020525f908152604090205460ff1681565b610232610b7d565b6102326103533660046120b6565b610c61565b6101f56103663660046120f6565b610df9565b5f546101f59073ffffffffffffffffffffffffffffffffffffffff1681565b6102a461039836600461202e565b60046020525f908152604090205460ff1681565b6102326103ba36600461212e565b6113d4565b6101f56103cd366004612147565b60096020525f908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b6102326114cb565b61023261040a366004611f83565b61157c565b61023261041d36600461202e565b61169c565b6102a461043036600461202e565b60056020525f908152604090205460ff1681565b600b54604051908152602001610216565b6001546101f59073ffffffffffffffffffffffffffffffffffffffff1681565b6003546101f59073ffffffffffffffffffffffffffffffffffffffff1681565b6102326117da565b6008546104ab9061ffff1681565b60405161ffff9091168152602001610216565b6102326104cc36600461202e565b61189d565b6104fe6104df36600461215e565b60076020525f908152604090205461ffff808216916201000090041682565b6040805161ffff938416815292909116602083015201610216565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610569576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105b6576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82165f8181526004602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591519182527fb5d3cf05733bee0c2f095eab8b623df94643cf558a55635853484e57ea121efe91015b60405180910390a25050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610690576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff166106df576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b600b5460609080841061072b575050604080515f815260208101909152610823565b5f61073684866121d1565b9050818111156107435750805b61074d85826121e4565b67ffffffffffffffff81111561076557610765612177565b60405190808252806020026020018201604052801561078e578160200160208202803683370190505b5092505f5b835181101561081f57600b6107a882886121d1565b815481106107b8576107b86121f7565b905f5260205f20015f9054906101000a900473ffffffffffffffffffffffffffffffffffffffff168482815181106107f2576107f26121f7565b73ffffffffffffffffffffffffffffffffffffffff90921660209283029190910190910152600101610793565b5050505b92915050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610879576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166108c6576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82165f8181526006602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591519182527fdacbec7f25e70cdd1eaa994eb11bdc2111ba9390a91b97157c4be55bd041f19b9101610634565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610998576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166109e5576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff000000000000000000000000000000000000000083168117909355604080519190921680825260208201939093527f62c67cb852e451f36ab720db75ef4514bb68a3897d1a5c81c9a83b7c98000a73917f542077e5b1a280f97367adbe30588ff00d9d42b623131f3648274d900b7e494a9101610634565b6040805173ffffffffffffffffffffffffffffffffffffffff80871660208084019190915281871683850152908516606083015260808083018590528351808403909101815260a090920190925280519101205f90610b07907f000000000000000000000000000000000000000000000000000000000000000090306119f9565b95945050505050565b6060600b805480602002602001604051908101604052809291908181526020018280548015610b7357602002820191905f5260205f20905b815473ffffffffffffffffffffffffffffffffffffffff168152600190910190602001808311610b48575b5050505050905090565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610bcf576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610cb1576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8061ffff168261ffff161180610cd65750610ccb83611ab3565b61ffff168161ffff16115b15610d0d576040517f0a66d87e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405180604001604052808361ffff1681526020018261ffff1681525060075f856003811115610d3f57610d3f612224565b6003811115610d5057610d50612224565b81526020808201929092526040015f2082518154939092015161ffff90811662010000027fffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000909416921691909117919091179055826003811115610db657610db6612224565b6040805161ffff8086168252841660208201527f58a99e194f4926b065a0e8cc5503ba78c961fce1af721753b7f8fbee69527904910160405180910390a2505050565b6003545f9073ffffffffffffffffffffffffffffffffffffffff163314610ebd57335f9081526005602052604090205460ff16610e62576040517ff91cf59a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b33610e70602084018461202e565b73ffffffffffffffffffffffffffffffffffffffff1614610ebd576040517f7d5f7a4b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610ecb602084018461202e565b73ffffffffffffffffffffffffffffffffffffffff1603610f18576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60065f610f2b604085016020860161202e565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040015f205460ff16610f8a576040517fb33ef95c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60045f610f9d606085016040860161202e565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040015f205460ff16610ffc576040517f11a89e1300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611025611010604085016020860161202e565b611020606086016040870161202e565b611b22565b905060608301351580159061103e575046836060013514155b15611075576040517fd05df1a200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110818360a001611c55565b5f61110b611092602086018661202e565b6110a2604087016020880161202e565b6110b2606088016040890161202e565b6040805173ffffffffffffffffffffffffffffffffffffffff94851660208083019190915293851681830152919093166060820152608080890135828201528351808303909101815260a0909101909252815191012090565b5f8181526009602052604090205490915073ffffffffffffffffffffffffffffffffffffffff1615611169576040517f1144626f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111937f000000000000000000000000000000000000000000000000000000000000000082611e55565b5f828152600960209081526040808320805473ffffffffffffffffffffffffffffffffffffffff86167fffffffffffffffffffffffff00000000000000000000000000000000000000009182168117909255818552600a90935281842080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001908117909155600b805491820181559094527f0175b7a638427703f0dbe7bb9bbf987a2551717b34e79f33b5b1008d1fa01db990930180549092169092179055909350611269906060860190860161202e565b73ffffffffffffffffffffffffffffffffffffffff1661128c602086018661202e565b73ffffffffffffffffffffffffffffffffffffffff9081169085167feda6280052634db6f767c0de2e89344adb0cd61e939e48fc3708f8ddef7277996112d86040890160208a0161202e565b6040805173ffffffffffffffffffffffffffffffffffffffff90921682526060808b013560208401526080808c01359284019290925282018790520160405180910390a473ffffffffffffffffffffffffffffffffffffffff83166375520ffa83611349606088016040890161202e565b6113596040890160208a0161202e565b61136660208a018a61202e565b60608a013560a08b0161137d6101a08d018d612251565b6040518963ffffffff1660e01b81526004016113a0989796959493929190612300565b5f604051808303815f87803b1580156113b7575f5ffd5b505af11580156113c9573d5f5f3e3d5ffd5b505050505050919050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314611424576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61271061ffff82161115611464576040517fbcd55b0f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600880547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00001661ffff83169081179091556040519081527fe9d378251065314555dd1d11e56697a0860c87c2a577ec0f09e96dab9ff560709060200160405180910390a150565b60025473ffffffffffffffffffffffffffffffffffffffff16331461151c576040517fafb38e8000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600380547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1690556040515f815233907fe9eaa3315e98979840fe905a13da4c74e5e7a612fdd5d7cb5b2fac0e79191ea0906020015b60405180910390a2565b60035473ffffffffffffffffffffffffffffffffffffffff1633146115cd576040517f28e3c67e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661161a576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82165f8181526005602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591519182527fcfe7691facd4ee55ee5bafdace0a5147e021812d1650c94f2617355a8056c46e9101610634565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146116ec576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116611739576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6003805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff000000000000000000000000000000000000000083168117909355604080519190921680825260208201939093527fba1ff1325c30c26aadd0c969267e4cddaa9f65a37b17807e4ac55ef73fd5a3a8917f542077e5b1a280f97367adbe30588ff00d9d42b623131f3648274d900b7e494a9101610634565b60025473ffffffffffffffffffffffffffffffffffffffff16331461182b576040517fafb38e8000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600380547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000001790556040516001815233907fe9eaa3315e98979840fe905a13da4c74e5e7a612fdd5d7cb5b2fac0e79191ea090602001611572565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146118ed576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff811661193a576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603611989576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b604080517fb3582b35133d50545afa5036515af43d6000803e604d573d6000fd5b3d6000f360609081527f1b60e01b36527fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6c83527660195155f3363d3d373d3d363d602036600436635c60da60205273ffffffffffffffffffffffffffffffffffffffff86167c60523d8160223d39730000000000000000000000000000000000000000176009526074600c20919092525f91829052610b07818585611e61565b5f80826003811115611ac757611ac7612224565b03611ad55750611388919050565b6001826003811115611ae957611ae9612224565b03611af757506103e8919050565b6002826003811115611b0b57611b0b612224565b03611b1957506107d0919050565b506107d0919050565b6040517f275e5da500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301525f919084169063275e5da590602401602060405180830381865afa925050508015611bcb575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252611bc891810190612406565b60015b611c01576040517f7955c0d400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116611c4e576040517f7955c0d400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b9392505050565b5f5b60048160ff161015611e5157816080018160ff1660048110611c7b57611c7b6121f7565b602002016020810190611c8e9190612421565b611cfa578160ff821660048110611ca757611ca76121f7565b602002016020810190611cba919061212e565b61ffff1615611cf5576040517fd9f1b37700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611e49565b5f8260ff831660048110611d1057611d106121f7565b602002016020810190611d23919061212e565b9050611d428260ff166003811115611d3d57611d3d612224565b611ab3565b61ffff168161ffff161115611d83576040517f3811c92b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f60075f8460ff166003811115611d9c57611d9c612224565b6003811115611dad57611dad612224565b6003811115611dbe57611dbe612224565b815260208082019290925260409081015f2081518083019092525461ffff808216808452620100009092048116938301939093529092509083161080611e0f5750806020015161ffff168261ffff16115b15611e46576040517f1310ac1700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505b600101611c57565b5050565b5f611c4e5f8484611e80565b5f60ff5f5350603592835260601b60015260155260555f908120915290565b604080517fb3582b35133d50545afa5036515af43d6000803e604d573d6000fd5b3d6000f36060527f1b60e01b36527fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6c9091527660195155f3363d3d373d3d363d602036600436635c60da6020527c60523d8160223d3973000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff8416176009525f90826074600c87f5915081611f3d5763301164255f526004601cfd5b6040525f6060529392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611f6c575f5ffd5b50565b80358015158114611f7e575f5ffd5b919050565b5f5f60408385031215611f94575f5ffd5b8235611f9f81611f4b565b9150611fad60208401611f6f565b90509250929050565b5f5f60408385031215611fc7575f5ffd5b50508035926020909101359150565b602080825282518282018190525f918401906040840190835b8181101561202357835173ffffffffffffffffffffffffffffffffffffffff16835260209384019390920191600101611fef565b509095945050505050565b5f6020828403121561203e575f5ffd5b8135611c4e81611f4b565b5f5f5f5f6080858703121561205c575f5ffd5b843561206781611f4b565b9350602085013561207781611f4b565b9250604085013561208781611f4b565b9396929550929360600135925050565b803560048110611f7e575f5ffd5b803561ffff81168114611f7e575f5ffd5b5f5f5f606084860312156120c8575f5ffd5b6120d184612097565b92506120df602085016120a5565b91506120ed604085016120a5565b90509250925092565b5f60208284031215612106575f5ffd5b813567ffffffffffffffff81111561211c575f5ffd5b82016101c08185031215611c4e575f5ffd5b5f6020828403121561213e575f5ffd5b611c4e826120a5565b5f60208284031215612157575f5ffd5b5035919050565b5f6020828403121561216e575f5ffd5b611c4e82612097565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b80820180821115610823576108236121a4565b81810381811115610823576108236121a4565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612284575f5ffd5b83018035915067ffffffffffffffff82111561229e575f5ffd5b6020019150368190038213156122b2575f5ffd5b9250929050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b73ffffffffffffffffffffffffffffffffffffffff8916815273ffffffffffffffffffffffffffffffffffffffff8816602082015273ffffffffffffffffffffffffffffffffffffffff8716604082015273ffffffffffffffffffffffffffffffffffffffff861660608201528460808201525f60a08201855f5b60048110156123a65761ffff612390836120a5565b168352602092830192919091019060010161237b565b5050506101208201608086015f5b60048110156123dd576123c682611f6f565b1515835260209283019291909101906001016123b4565b5050506101c06101a08301526123f86101c0830184866122b9565b9a9950505050505050505050565b5f60208284031215612416575f5ffd5b8151611c4e81611f4b565b5f60208284031215612431575f5ffd5b611c4e82611f6f56fea264697066735822122018c615452b4f380d4aa146c8a9cbc4b3f9feddd87d277047aef73d4bf7a3433f64736f6c634300081d0033";
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
        readonly name: "AdapterNotApproved";
        readonly inputs: readonly [];
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
        readonly name: "UnderlyingProbeFailed";
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
