import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LiFiVaultWrapperFactory, LiFiVaultWrapperFactoryInterface } from "../LiFiVaultWrapperFactory";
type LiFiVaultWrapperFactoryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LiFiVaultWrapperFactory__factory extends ContractFactory {
    constructor(...args: LiFiVaultWrapperFactoryConstructorParams);
    deploy(_beacon: PromiseOrValue<string>, _owner: PromiseOrValue<string>, _emergencyPauser: PromiseOrValue<string>, _onboardingManager: PromiseOrValue<string>, _lifiFeeRecipient: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LiFiVaultWrapperFactory>;
    getDeployTransaction(_beacon: PromiseOrValue<string>, _owner: PromiseOrValue<string>, _emergencyPauser: PromiseOrValue<string>, _onboardingManager: PromiseOrValue<string>, _lifiFeeRecipient: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LiFiVaultWrapperFactory;
    connect(signer: Signer): LiFiVaultWrapperFactory__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b50604051612ab3380380612ab383398101604081905261002e9161014b565b5f80546001600160a01b0319166001600160a01b03868116919091179091558516158061006257506001600160a01b038416155b8061007457506001600160a01b038316155b8061008657506001600160a01b038216155b8061009857506001600160a01b038116155b156100b65760405163d92e233d60e01b815260040160405180910390fd5b6017853b116100d8576040516303777f6960e51b815260040160405180910390fd5b6001600160a01b03948516608052600280549386166001600160a01b031994851617905560038054928616928416929092179091556004805491909416911617909155506009805461ffff1916611f401790556101ac565b80516001600160a01b0381168114610146575f5ffd5b919050565b5f5f5f5f5f60a0868803121561015f575f5ffd5b61016886610130565b945061017660208701610130565b935061018460408701610130565b925061019260608701610130565b91506101a060808701610130565b90509295509295909350565b6080516128e86101cb5f395f81816102dc015261184501526128e85ff3fe608060405234801561000f575f5ffd5b50600436106101bb575f3560e01c80637b0e24e1116100f3578063dab297c311610093578063f12d54d81161006e578063f12d54d814610457578063f294e72b1461045f578063f2fde38b14610480578063fec7e26f14610493575f5ffd5b8063dab297c314610404578063e30c397814610417578063f0882a0214610437575f5ffd5b80639a07d5cf116100ce5780639a07d5cf146103b4578063c3122044146103d6578063c983fab3146103e9578063ce190578146103fc575f5ffd5b80637b0e24e11461034d5780638da5cb5b146103605780638e640ae41461037f575f5ffd5b80633d312f6d1161015e57806349493a4d1161013957806349493a4d146102d757806361a552dc146102fe5780636b44e6be146103235780637200b82914610345575f5ffd5b80633d312f6d1461027f5780633e70838b14610292578063431a20ae146102a5575f5ffd5b806319ac97361161019957806319ac97361461023c578063215f76aa1461025157806323452b9c1461026457806331f8ef051461026c575f5ffd5b8063026f4b1e146101bf578063065b3adf146102095780630bae1c8a14610229575b5f5ffd5b6004546101df9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6002546101df9073ffffffffffffffffffffffffffffffffffffffff1681565b6101df610237366004611e63565b6104db565b61024f61024a366004611ea8565b61054d565b005b6101df61025f366004611ee3565b610674565b61024f610af5565b61024f61027a366004611f1b565b610bbe565b61024f61028d366004611ea8565b610cc9565b61024f6102a0366004611f1b565b610e2e565b6102c76102b3366004611f1b565b60076020525f908152604090205460ff1681565b6040519015158152602001610200565b6101df7f000000000000000000000000000000000000000000000000000000000000000081565b6004546102c79074010000000000000000000000000000000000000000900460ff1681565b6102c7610331366004611f1b565b600a6020525f908152604090205460ff1681565b61024f610f6c565b61024f61035b366004611f5a565b611050565b5f546101df9073ffffffffffffffffffffffffffffffffffffffff1681565b6101df61038d366004611f9a565b60066020525f908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b6102c76103c2366004611f1b565b60056020525f908152604090205460ff1681565b61024f6103e4366004611fb1565b6111e8565b61024f6103f7366004611fca565b6112de565b61024f6113e3565b61024f610412366004611f1b565b611494565b6001546101df9073ffffffffffffffffffffffffffffffffffffffff1681565b6003546101df9073ffffffffffffffffffffffffffffffffffffffff1681565b61024f6115d2565b60095461046d9061ffff1681565b60405161ffff9091168152602001610200565b61024f61048e366004611f1b565b611695565b6104c06104a1366004611fed565b60086020525f908152604090205461ffff808216916201000090041682565b6040805161ffff938416815292909116602083015201610200565b60408051602080820187905273ffffffffffffffffffffffffffffffffffffffff808716838501528516606083015260808083018590528351808403909101815260a090920190925280519101205f90610544906105376117f1565b80519060200120306118bd565b95945050505050565b5f5473ffffffffffffffffffffffffffffffffffffffff16331461059d576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105ea576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82165f8181526005602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591519182527fb5d3cf05733bee0c2f095eab8b623df94643cf558a55635853484e57ea121efe91015b60405180910390a25050565b5f81356106ad576040517f72223b3a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60035473ffffffffffffffffffffffffffffffffffffffff1633148015906106fa575081355f9081526006602052604090205473ffffffffffffffffffffffffffffffffffffffff163314155b15610731576040517f164c83eb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6107426040840160208501611f1b565b73ffffffffffffffffffffffffffffffffffffffff160361078f576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60075f6107a26060850160408601611f1b565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040015f205460ff16610801576040517fb33ef95c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60055f6108146080850160608601611f1b565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040015f205460ff16610873576040517f11a89e1300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61089c6108876060850160408601611f1b565b6108976080860160608701611f1b565b6118fc565b90506108aa8360a0016119e2565b5f6108b88461012001611b50565b90505f61093685356108d06060880160408901611f1b565b6108e06080890160608a01611f1b565b6040805160208082019590955273ffffffffffffffffffffffffffffffffffffffff938416818301529190921660608201526080808a0135828201528251808303909101815260a0909101909152805191012090565b905061094a5f826109456117f1565b611cc0565b73ffffffffffffffffffffffffffffffffffffffff81165f908152600a6020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905593506109a96080860160608701611f1b565b73ffffffffffffffffffffffffffffffffffffffff9081169086359086167fe873e01c3f29cd1e6884dcb76522ef8298beaca6950c706e7fdd41af522924736109f860608a0160408b01611f1b565b87610a0960408c0160208d01611f1b565b888c6080013589604051610a2296959493929190612032565b60405180910390a473ffffffffffffffffffffffffffffffffffffffff8416639835b23b610a566080880160608901611f1b565b610a666060890160408a01611f1b565b610a7660408a0160208b01611f1b565b8660a08b01610a896101c08d018d612082565b8d6101a0016020810190610a9d9190611f1b565b6040518963ffffffff1660e01b8152600401610ac0989796959493929190612157565b5f604051808303815f87803b158015610ad7575f5ffd5b505af1158015610ae9573d5f5f3e3d5ffd5b50505050505050919050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610b45576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610b94576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610c0e576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610c5b576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517f7975b7b666747c0c864931c51b88cf8c4fe1fb5d993612cfb84524fbf166bdf2905f90a250565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610d19576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610d66576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b808015610d7557506017823b11155b15610dac576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82165f8181526007602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591519182527fdacbec7f25e70cdd1eaa994eb11bdc2111ba9390a91b97157c4be55bd041f19b9101610668565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610e7e576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610ecb576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff000000000000000000000000000000000000000083168117909355604080519190921680825260208201939093527f62c67cb852e451f36ab720db75ef4514bb68a3897d1a5c81c9a83b7c98000a73917f542077e5b1a280f97367adbe30588ff00d9d42b623131f3648274d900b7e494a9101610668565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610fbe576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146110a0576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8061ffff168261ffff1611806110c557506110ba83611db0565b61ffff168161ffff16115b156110fc576040517f0a66d87e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405180604001604052808361ffff1681526020018261ffff1681525060085f85600381111561112e5761112e61222f565b600381111561113f5761113f61222f565b81526020808201929092526040015f2082518154939092015161ffff90811662010000027fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000009094169216919091179190911790558260038111156111a5576111a561222f565b6040805161ffff8086168252841660208201527f58a99e194f4926b065a0e8cc5503ba78c961fce1af721753b7f8fbee69527904910160405180910390a2505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314611238576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61271061ffff821610611277576040517fbcd55b0f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600980547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00001661ffff83169081179091556040519081527fe9d378251065314555dd1d11e56697a0860c87c2a577ec0f09e96dab9ff560709060200160405180910390a150565b60035473ffffffffffffffffffffffffffffffffffffffff16331461132f576040517f28e3c67e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81611366576040517f72223b3a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8281526006602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff85169081179091559051909184917f3def9dd5d6064865cf41d6faa1357fba7e4c253bd4245a5eaca3c4a473fa5f1e9190a35050565b60025473ffffffffffffffffffffffffffffffffffffffff163314611434576040517fafb38e8000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600480547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1690556040515f815233907fe9eaa3315e98979840fe905a13da4c74e5e7a612fdd5d7cb5b2fac0e79191ea0906020015b60405180910390a2565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146114e4576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116611531576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6003805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff000000000000000000000000000000000000000083168117909355604080519190921680825260208201939093527fba1ff1325c30c26aadd0c969267e4cddaa9f65a37b17807e4ac55ef73fd5a3a8917f542077e5b1a280f97367adbe30588ff00d9d42b623131f3648274d900b7e494a9101610668565b60025473ffffffffffffffffffffffffffffffffffffffff163314611623576040517fafb38e8000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600480547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000001790556040516001815233907fe9eaa3315e98979840fe905a13da4c74e5e7a612fdd5d7cb5b2fac0e79191ea09060200161148a565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146116e5576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116611732576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff821603611781576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b60606040518060200161180390611e14565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe082820381018352601f90910116602081810160409081525f83525161186d927f00000000000000000000000000000000000000000000000000000000000000009290910161225c565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290526118a992916020016122e3565b604051602081830303815290604052905090565b5f604051836040820152846020820152828152600b8101905060ff81536055902073ffffffffffffffffffffffffffffffffffffffff16949350505050565b6040517fae1c160c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301525f919084169063ae1c160c90602401602060405180830381865afa158015611969573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061198d91906122ff565b905073ffffffffffffffffffffffffffffffffffffffff81166119dc576040517fa650953c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b92915050565b5f5b6004811015611b4c575f828260048110611a0057611a0061231a565b602002016020810190611a139190611fb1565b90508061ffff165f03611a265750611b44565b611a40826003811115611a3b57611a3b61222f565b611db0565b61ffff168161ffff161115611a81576040517f3811c92b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f60085f846003811115611a9757611a9761222f565b6003811115611aa857611aa861222f565b6003811115611ab957611ab961222f565b815260208082019290925260409081015f2081518083019092525461ffff808216808452620100009092048116938301939093529092509083161080611b0a5750806020015161ffff168261ffff16115b15611b41576040517f1310ac1700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505b6001016119e4565b5050565b611b58611e21565b60095460035461ffff9091169073ffffffffffffffffffffffffffffffffffffffff163314155f5b6004811015611cb8575f858260048110611b9c57611b9c61231a565b602002016020810190611baf9190611fb1565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000161ffff821601611c035783858360048110611bef57611bef61231a565b61ffff909216602092909202015250611cb0565b61271061ffff821610611c42576040517fbcd55b0f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b828015611c5657508361ffff168161ffff16115b15611c8d576040517f68bb4e9400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80858360048110611ca057611ca061231a565b61ffff9092166020929092020152505b600101611b80565b505050919050565b5f83471015611d08576040517fcf4791810000000000000000000000000000000000000000000000000000000081524760048201526024810185905260440160405180910390fd5b81515f03611d42576040517f4ca249dc00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8282516020840186f5905073ffffffffffffffffffffffffffffffffffffffff8116611da9573d5f03611da1576040517fb06ebf3d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611da9611e09565b9392505050565b6040805160808101825261138881526103e860208201526107d091810182905260608101919091525f9080836003811115611ded57611ded61222f565b60048110611dfd57611dfd61231a565b60200201519392505050565b6040513d5f823e3d81fd5b61056b8061234883390190565b60405180608001604052806004906020820280368337509192915050565b73ffffffffffffffffffffffffffffffffffffffff81168114611e60575f5ffd5b50565b5f5f5f5f60808587031215611e76575f5ffd5b843593506020850135611e8881611e3f565b92506040850135611e9881611e3f565b9396929550929360600135925050565b5f5f60408385031215611eb9575f5ffd5b8235611ec481611e3f565b915060208301358015158114611ed8575f5ffd5b809150509250929050565b5f60208284031215611ef3575f5ffd5b813567ffffffffffffffff811115611f09575f5ffd5b82016101e08185031215611da9575f5ffd5b5f60208284031215611f2b575f5ffd5b8135611da981611e3f565b803560048110611f44575f5ffd5b919050565b803561ffff81168114611f44575f5ffd5b5f5f5f60608486031215611f6c575f5ffd5b611f7584611f36565b9250611f8360208501611f49565b9150611f9160408501611f49565b90509250925092565b5f60208284031215611faa575f5ffd5b5035919050565b5f60208284031215611fc1575f5ffd5b611da982611f49565b5f5f60408385031215611fdb575f5ffd5b823591506020830135611ed881611e3f565b5f60208284031215611ffd575f5ffd5b611da982611f36565b805f5b600481101561202c57815161ffff16845260209384019390910190600101612009565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8781168252868116602083015285166040820152610120810161206d6060830186612006565b60e08201939093526101000152949350505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126120b5575f5ffd5b83018035915067ffffffffffffffff8211156120cf575f5ffd5b6020019150600681901b36038213156120e6575f5ffd5b9250929050565b8183526020830192505f815f5b8481101561214d57813561210d81611e3f565b73ffffffffffffffffffffffffffffffffffffffff16865261ffff61213460208401611f49565b16602087015260409586019591909101906001016120fa565b5093949350505050565b73ffffffffffffffffffffffffffffffffffffffff8916815273ffffffffffffffffffffffffffffffffffffffff8816602082015273ffffffffffffffffffffffffffffffffffffffff871660408201526121b56060820187612006565b5f60e08201865f5b60048110156121e85761ffff6121d283611f49565b16835260209283019291909101906001016121bd565b5050506101a06101608301526122036101a0830185876120ed565b73ffffffffffffffffffffffffffffffffffffffff841661018084015290509998505050505050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b73ffffffffffffffffffffffffffffffffffffffff83168152604060208201525f82518060408401528060208501606085015e5f6060828501015260607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168401019150509392505050565b5f81518060208401855e5f93019283525090919050565b5f6122f76122f183866122cc565b846122cc565b949350505050565b5f6020828403121561230f575f5ffd5b8151611da981611e3f565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffdfe60a060405260405161056b38038061056b83398101604081905261002291610331565b61002c828261003e565b506001600160a01b0316608052610413565b610047826100fb565b6040516001600160a01b038316907f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e905f90a28051156100ef576100ea826001600160a01b0316635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100c0573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906100e491906103f3565b82610209565b505050565b6100f76102aa565b5050565b806001600160a01b03163b5f0361013557604051631933b43b60e21b81526001600160a01b03821660048201526024015b60405180910390fd5b807fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5080546001600160a01b0319166001600160a01b0392831617905560408051635c60da1b60e01b815290515f92841691635c60da1b9160048083019260209291908290030181865afa1580156101ae573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101d291906103f3565b9050806001600160a01b03163b5f036100f757604051634c9c8ce360e01b81526001600160a01b038216600482015260240161012c565b60605f61021684846102cb565b905080801561023757505f3d118061023757505f846001600160a01b03163b115b1561024c576102446102de565b9150506102a4565b801561027657604051639996b31560e01b81526001600160a01b038516600482015260240161012c565b3d15610289576102846102f7565b6102a2565b60405163d6bda27560e01b815260040160405180910390fd5b505b92915050565b34156102c95760405163b398979f60e01b815260040160405180910390fd5b565b5f5f5f835160208501865af49392505050565b6040513d81523d5f602083013e3d602001810160405290565b6040513d5f823e3d81fd5b80516001600160a01b0381168114610318575f5ffd5b919050565b634e487b7160e01b5f52604160045260245ffd5b5f5f60408385031215610342575f5ffd5b61034b83610302565b60208401519092506001600160401b03811115610366575f5ffd5b8301601f81018513610376575f5ffd5b80516001600160401b0381111561038f5761038f61031d565b604051601f8201601f19908116603f011681016001600160401b03811182821017156103bd576103bd61031d565b6040528181528282016020018710156103d4575f5ffd5b8160208401602083015e5f602083830101528093505050509250929050565b5f60208284031215610403575f5ffd5b61040c82610302565b9392505050565b60805161014161042a5f395f602301526101415ff3fe608060405261000c61000e565b005b61001e610019610020565b6100b3565b565b5f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561008a573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906100ae91906100d1565b905090565b365f5f375f5f365f845af43d5f5f3e8080156100cd573d5ff35b3d5ffd5b5f602082840312156100e1575f5ffd5b815173ffffffffffffffffffffffffffffffffffffffff81168114610104575f5ffd5b939250505056fea264697066735822122044339d359b5daa4c46fb689605b1d8768ffc643eed36e97fd7b9aa1564dad1b264736f6c634300081d0033a2646970667358221220e4b3bf99711f9a512c8cf43ac34945907413ea6fd4414c9b3b65d6bc3316782064736f6c634300081d0033";
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
        }, {
            readonly name: "_lifiFeeRecipient";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "BEACON";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
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
        readonly name: "approvedIntegratorDeployer";
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
                readonly name: "namespace";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "vaultWrapperAdmin";
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
                }];
            }, {
                readonly name: "integratorShareBps";
                readonly type: "uint16[4]";
                readonly internalType: "uint16[4]";
            }, {
                readonly name: "accessGate";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivers";
                readonly type: "tuple[]";
                readonly internalType: "struct FeeReceiver[]";
                readonly components: readonly [{
                    readonly name: "wallet";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "bps";
                    readonly type: "uint16";
                    readonly internalType: "uint16";
                }];
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
        readonly name: "lifiFeeRecipient";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
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
            readonly name: "_namespace";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
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
        readonly name: "setApprovedIntegratorDeployer";
        readonly inputs: readonly [{
            readonly name: "_namespace";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_deployer";
            readonly type: "address";
            readonly internalType: "address";
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
        readonly name: "setLifiFeeRecipient";
        readonly inputs: readonly [{
            readonly name: "_recipient";
            readonly type: "address";
            readonly internalType: "address";
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
        readonly name: "IntegratorDeployerSet";
        readonly inputs: readonly [{
            readonly name: "namespace";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "deployer";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LifiFeeRecipientSet";
        readonly inputs: readonly [{
            readonly name: "recipient";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
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
            readonly name: "namespace";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
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
            readonly name: "asset";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "vaultWrapperAdmin";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "integratorShareBps";
            readonly type: "uint16[4]";
            readonly indexed: false;
            readonly internalType: "uint16[4]";
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
        readonly name: "Create2EmptyBytecode";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "FailedDeployment";
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
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "needed";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "IntegratorShareAboveDefault";
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
        readonly name: "NotApprovedDeployer";
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
    }, {
        readonly type: "error";
        readonly name: "ZeroNamespace";
        readonly inputs: readonly [];
    }];
    static createInterface(): LiFiVaultWrapperFactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LiFiVaultWrapperFactory;
}
export {};
