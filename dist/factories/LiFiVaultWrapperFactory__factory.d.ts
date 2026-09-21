import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LiFiVaultWrapperFactory, LiFiVaultWrapperFactoryInterface } from "../LiFiVaultWrapperFactory";
type LiFiVaultWrapperFactoryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LiFiVaultWrapperFactory__factory extends ContractFactory {
    constructor(...args: LiFiVaultWrapperFactoryConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LiFiVaultWrapperFactory>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LiFiVaultWrapperFactory;
    connect(signer: Signer): LiFiVaultWrapperFactory__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b5060156019565b60c9565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff161560685760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b039081161460c65780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b612d8a806100d65f395ff3fe608060405234801561000f575f5ffd5b50600436106101c6575f3560e01c80637b0e24e1116100fe578063ce1905781161009e578063f12d54d81161006e578063f12d54d81461043e578063f294e72b14610446578063f2fde38b14610480578063fec7e26f14610493575f5ffd5b8063ce190578146103fb578063dab297c314610403578063e30c397814610416578063f0882a021461041e575f5ffd5b80639459e31c116100d95780639459e31c146103a05780639a07d5cf146103b3578063c3122044146103d5578063c983fab3146103e8575f5ffd5b80637b0e24e1146103505780638da5cb5b146103635780638e640ae41461036b575f5ffd5b80633e70838b1161016957806361a552dc1161014457806361a552dc146102f95780636b44e6be1461031e578063715018a61461034057806379ba509714610348575f5ffd5b80633e70838b14610295578063431a20ae146102a857806359659e90146102da575f5ffd5b806319ac9736116101a457806319ac973614610247578063215f76aa1461025c57806331f8ef051461026f5780633d312f6d14610282575f5ffd5b8063026f4b1e146101ca578063065b3adf146102145780630bae1c8a14610234575b5f5ffd5b6003546101ea9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6001546101ea9073ffffffffffffffffffffffffffffffffffffffff1681565b6101ea610242366004612269565b6104db565b61025a6102553660046122ae565b61054d565b005b6101ea61026a3660046122e9565b610563565b61025a61027d366004612321565b610a0d565b61025a6102903660046122ae565b610ad0565b61025a6102a3366004612321565b610ae2565b6102ca6102b6366004612321565b60066020525f908152604090205460ff1681565b604051901515815260200161020b565b5f546101ea9073ffffffffffffffffffffffffffffffffffffffff1681565b6003546102ca9074010000000000000000000000000000000000000000900460ff1681565b6102ca61032c366004612321565b60086020525f908152604090205460ff1681565b61025a610be0565b61025a610c12565b61025a61035e366004612360565b610c92565b6101ea610caa565b6101ea6103793660046123a0565b60056020525f908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b61025a6103ae3660046123b7565b610ceb565b6102ca6103c1366004612321565b60046020525f908152604090205460ff1681565b61025a6103e33660046123ef565b61124d565b61025a6103f6366004612408565b61125e565b61025a611363565b61025a610411366004612321565b611414565b6101ea61150a565b6002546101ea9073ffffffffffffffffffffffffffffffffffffffff1681565b61025a611532565b60035461046d907501000000000000000000000000000000000000000000900461ffff1681565b60405161ffff909116815260200161020b565b61025a61048e366004612321565b6115f5565b6104c06104a136600461242b565b60076020525f908152604090205461ffff808216916201000090041682565b6040805161ffff93841681529290911660208301520161020b565b60408051602080820187905273ffffffffffffffffffffffffffffffffffffffff808716838501528516606083015260808083018590528351808403909101815260a090920190925280519101205f90610544906105376116ac565b8051906020012030611771565b95945050505050565b6105556117b0565b61055f828261180a565b5050565b5f813561059c576040517f72223b3a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60025473ffffffffffffffffffffffffffffffffffffffff1633148015906105e9575081355f9081526005602052604090205473ffffffffffffffffffffffffffffffffffffffff163314155b15610620576040517f164c83eb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6106316040840160208501612321565b73ffffffffffffffffffffffffffffffffffffffff160361067e576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60065f6106916060850160408601612321565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040015f205460ff166106f0576040517fb33ef95c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60045f6107036080850160608601612321565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040015f205460ff16610762576040517f11a89e1300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61076e8260a0016118d9565b5f61077c8361012001611a60565b90505f6107fa84356107946060870160408801612321565b6107a46080880160608901612321565b6040805160208082019590955273ffffffffffffffffffffffffffffffffffffffff93841681830152919092166060820152608080890135828201528251808303909101815260a0909101909152805191012090565b905061080e5f826108096116ac565b611be8565b73ffffffffffffffffffffffffffffffffffffffff81165f81815260086020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055909350639835b23b6108736080870160608801612321565b6108836060880160408901612321565b6108936040890160208a01612321565b8660a08a016108a66101c08c018c612444565b6108b86101c08e016101a08f01612321565b6040518963ffffffff1660e01b81526004016108db989796959493929190612545565b5f604051808303815f87803b1580156108f2575f5ffd5b505af1158015610904573d5f5f3e3d5ffd5b50610919925050506080850160608601612321565b73ffffffffffffffffffffffffffffffffffffffff9081169085359085167fe873e01c3f29cd1e6884dcb76522ef8298beaca6950c706e7fdd41af522924736109686060890160408a01612321565b8773ffffffffffffffffffffffffffffffffffffffff166338d52e0f6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156109b1573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109d5919061261d565b6109e560408b0160208c01612321565b888b60800135896040516109fe96959493929190612638565b60405180910390a45050919050565b610a156117b0565b73ffffffffffffffffffffffffffffffffffffffff8116610a62576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040517f7975b7b666747c0c864931c51b88cf8c4fe1fb5d993612cfb84524fbf166bdf2905f90a250565b610ad86117b0565b61055f8282611cd4565b610aea6117b0565b73ffffffffffffffffffffffffffffffffffffffff8116610b37576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff000000000000000000000000000000000000000083168117909355604080519190921680825260208201939093527f62c67cb852e451f36ab720db75ef4514bb68a3897d1a5c81c9a83b7c98000a73917f542077e5b1a280f97367adbe30588ff00d9d42b623131f3648274d900b7e494a91015b60405180910390a25050565b6040517f8905116500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3380610c1c61150a565b73ffffffffffffffffffffffffffffffffffffffff1614610c86576040517f118cdaa700000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff821660048201526024015b60405180910390fd5b610c8f81611dfc565b50565b610c9a6117b0565b610ca5838383611e4c565b505050565b5f807f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c1993005b5473ffffffffffffffffffffffffffffffffffffffff1692915050565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000810460ff16159067ffffffffffffffff165f81158015610d355750825b90505f8267ffffffffffffffff166001148015610d515750303b155b905081158015610d5f575080155b15610d96576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84547fffffffffffffffffffffffffffffffffffffffffffffffff00000000000000001660011785558315610df75784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff16680100000000000000001785555b5f610e056020880188612321565b73ffffffffffffffffffffffffffffffffffffffff161480610e4b57505f610e336060880160408901612321565b73ffffffffffffffffffffffffffffffffffffffff16145b80610e7a57505f610e626080880160608901612321565b73ffffffffffffffffffffffffffffffffffffffff16145b80610ea957505f610e9160a0880160808901612321565b73ffffffffffffffffffffffffffffffffffffffff16145b15610ee0576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610eed6020870187612321565b73ffffffffffffffffffffffffffffffffffffffff163b5f03610f3c576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f54610f4f6040880160208901612321565b611f94565b610f616020870187612321565b5f80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055610fb56060870160408801612321565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905561100a6080870160608801612321565b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905561105f60a0870160808801612321565b600380547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff929092169190911790556110be6110b961020088016101e089016123ef565b611fa5565b5f6110cf60c0880160a08901612321565b73ffffffffffffffffffffffffffffffffffffffff1614611104576111046110fd60c0880160a08901612321565b6001611cd4565b5f5b61111360c0880188612688565b90508110156111605761115861112c60c0890189612688565b8381811061113c5761113c6126ec565b90506020020160208101906111519190612321565b600161180a565b600101611106565b505f5b60048110156111e3576111db81600381111561118157611181612719565b8860e0018360048110611196576111966126ec565b604002015f0160208101906111ab91906123ef565b8960e00184600481106111c0576111c06126ec565b6040020160200160208101906111d691906123ef565b611e4c565b600101611163565b5083156112455784547fffffffffffffffffffffffffffffffffffffffffffffff00ffffffffffffffff168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050565b6112556117b0565b610c8f81611fa5565b60025473ffffffffffffffffffffffffffffffffffffffff1633146112af576040517f28e3c67e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b816112e6576040517f72223b3a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8281526005602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff85169081179091559051909184917f3def9dd5d6064865cf41d6faa1357fba7e4c253bd4245a5eaca3c4a473fa5f1e9190a35050565b60015473ffffffffffffffffffffffffffffffffffffffff1633146113b4576040517fafb38e8000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600380547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1690556040515f815233907fe9eaa3315e98979840fe905a13da4c74e5e7a612fdd5d7cb5b2fac0e79191ea0906020015b60405180910390a2565b61141c6117b0565b73ffffffffffffffffffffffffffffffffffffffff8116611469576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff000000000000000000000000000000000000000083168117909355604080519190921680825260208201939093527fba1ff1325c30c26aadd0c969267e4cddaa9f65a37b17807e4ac55ef73fd5a3a8917f542077e5b1a280f97367adbe30588ff00d9d42b623131f3648274d900b7e494a9101610bd4565b5f807f237e158222e3e6968b72b9db0d8043aacf074ad9f650f0d1606b4d82ee432c00610cce565b60015473ffffffffffffffffffffffffffffffffffffffff163314611583576040517fafb38e8000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600380547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000001790556040516001815233907fe9eaa3315e98979840fe905a13da4c74e5e7a612fdd5d7cb5b2fac0e79191ea09060200161140a565b6115fd6117b0565b7f237e158222e3e6968b72b9db0d8043aacf074ad9f650f0d1606b4d82ee432c0080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081178255611666610caa565b73ffffffffffffffffffffffffffffffffffffffff167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a35050565b6060604051806020016116be9061221d565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0828203810183525f8054601f9093019091166020818101604090815292825291516117219373ffffffffffffffffffffffffffffffffffffffff169201612746565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905261175d92916020016127cd565b604051602081830303815290604052905090565b5f604051836040820152846020820152828152600b8101905060ff81536055902073ffffffffffffffffffffffffffffffffffffffff16949350505050565b336117b9610caa565b73ffffffffffffffffffffffffffffffffffffffff1614611808576040517f118cdaa7000000000000000000000000000000000000000000000000000000008152336004820152602401610c7d565b565b73ffffffffffffffffffffffffffffffffffffffff8216611857576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82165f8181526004602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591519182527fb5d3cf05733bee0c2f095eab8b623df94643cf558a55635853484e57ea121efe9101610bd4565b5f5b600481101561055f575f8282600481106118f7576118f76126ec565b60200201602081019061190a91906123ef565b90508061ffff165f0361191d5750611a58565b61193782600381111561193257611932612719565b612066565b61ffff168161ffff161115611978576040517f3811c92b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f60075f84600381111561198e5761198e612719565b600381111561199f5761199f612719565b60038111156119b0576119b0612719565b815260208082019290925260409081015f2081518083019092525461ffff808216808452620100009092048116938301939093529092509083161080611a015750806020015161ffff168261ffff16115b15611a5557805160208201516040517f56ccb19600000000000000000000000000000000000000000000000000000000815261ffff8086166004830152928316602482015291166044820152606401610c7d565b50505b6001016118db565b611a6861222a565b600354600254750100000000000000000000000000000000000000000090910461ffff169073ffffffffffffffffffffffffffffffffffffffff163314155f5b6004811015611be0575f858260048110611ac457611ac46126ec565b602002016020810190611ad791906123ef565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000161ffff821601611b2b5783858360048110611b1757611b176126ec565b61ffff909216602092909202015250611bd8565b61271061ffff821610611b6a576040517fbcd55b0f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b828015611b7e57508361ffff168161ffff16115b15611bb5576040517f68bb4e9400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80858360048110611bc857611bc86126ec565b61ffff9092166020929092020152505b600101611aa8565b505050919050565b5f83471015611c2c576040517fcf47918100000000000000000000000000000000000000000000000000000000815247600482015260248101859052604401610c7d565b81515f03611c66576040517f4ca249dc00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8282516020840186f5905073ffffffffffffffffffffffffffffffffffffffff8116611ccd573d5f03611cc5576040517fb06ebf3d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611ccd6120bf565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff8216611d21576040517fd92e233d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b808015611d43575073ffffffffffffffffffffffffffffffffffffffff82163b155b15611d7a576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82165f8181526006602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001685151590811790915591519182527fdacbec7f25e70cdd1eaa994eb11bdc2111ba9390a91b97157c4be55bd041f19b9101610bd4565b7f237e158222e3e6968b72b9db0d8043aacf074ad9f650f0d1606b4d82ee432c0080547fffffffffffffffffffffffff000000000000000000000000000000000000000016815561055f826120ca565b8061ffff168261ffff161180611e715750611e6683612066565b61ffff168161ffff16115b15611ea8576040517f0a66d87e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60405180604001604052808361ffff1681526020018261ffff1681525060075f856003811115611eda57611eda612719565b6003811115611eeb57611eeb612719565b81526020808201929092526040015f2082518154939092015161ffff90811662010000027fffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000909416921691909117919091179055826003811115611f5157611f51612719565b6040805161ffff8086168252841660208201527f58a99e194f4926b065a0e8cc5503ba78c961fce1af721753b7f8fbee69527904910160405180910390a2505050565b611f9c61215f565b610c8f816121c6565b61271061ffff821610611fe4576040517fbcd55b0f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600380547fffffffffffffffffff0000ffffffffffffffffffffffffffffffffffffffffff16750100000000000000000000000000000000000000000061ffff8416908102919091179091556040519081527fe9d378251065314555dd1d11e56697a0860c87c2a577ec0f09e96dab9ff560709060200160405180910390a150565b6040805160808101825261138881526103e860208201526107d091810182905260608101919091525f90808360038111156120a3576120a3612719565b600481106120b3576120b36126ec565b60200201519392505050565b6040513d5f823e3d81fd5b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080547fffffffffffffffffffffffff0000000000000000000000000000000000000000811673ffffffffffffffffffffffffffffffffffffffff848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a3505050565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a005468010000000000000000900460ff16611808576040517fd7e6bcf800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6121ce61215f565b73ffffffffffffffffffffffffffffffffffffffff8116610c86576040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081525f6004820152602401610c7d565b61056b806127ea83390190565b60405180608001604052806004906020820280368337509192915050565b73ffffffffffffffffffffffffffffffffffffffff81168114610c8f575f5ffd5b5f5f5f5f6080858703121561227c575f5ffd5b84359350602085013561228e81612248565b9250604085013561229e81612248565b9396929550929360600135925050565b5f5f604083850312156122bf575f5ffd5b82356122ca81612248565b9150602083013580151581146122de575f5ffd5b809150509250929050565b5f602082840312156122f9575f5ffd5b813567ffffffffffffffff81111561230f575f5ffd5b82016101e08185031215611ccd575f5ffd5b5f60208284031215612331575f5ffd5b8135611ccd81612248565b80356004811061234a575f5ffd5b919050565b803561ffff8116811461234a575f5ffd5b5f5f5f60608486031215612372575f5ffd5b61237b8461233c565b92506123896020850161234f565b91506123976040850161234f565b90509250925092565b5f602082840312156123b0575f5ffd5b5035919050565b5f602082840312156123c7575f5ffd5b813567ffffffffffffffff8111156123dd575f5ffd5b82016102008185031215611ccd575f5ffd5b5f602082840312156123ff575f5ffd5b611ccd8261234f565b5f5f60408385031215612419575f5ffd5b8235915060208301356122de81612248565b5f6020828403121561243b575f5ffd5b611ccd8261233c565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612477575f5ffd5b83018035915067ffffffffffffffff821115612491575f5ffd5b6020019150600681901b36038213156124a8575f5ffd5b9250929050565b805f5b60048110156124d557815161ffff168452602093840193909101906001016124b2565b50505050565b8183526020830192505f815f5b8481101561253b5781356124fb81612248565b73ffffffffffffffffffffffffffffffffffffffff16865261ffff6125226020840161234f565b16602087015260409586019591909101906001016124e8565b5093949350505050565b73ffffffffffffffffffffffffffffffffffffffff8916815273ffffffffffffffffffffffffffffffffffffffff8816602082015273ffffffffffffffffffffffffffffffffffffffff871660408201526125a360608201876124af565b5f60e08201865f5b60048110156125d65761ffff6125c08361234f565b16835260209283019291909101906001016125ab565b5050506101a06101608301526125f16101a0830185876124db565b73ffffffffffffffffffffffffffffffffffffffff841661018084015290509998505050505050505050565b5f6020828403121561262d575f5ffd5b8151611ccd81612248565b73ffffffffffffffffffffffffffffffffffffffff8781168252868116602083015285166040820152610120810161267360608301866124af565b60e08201939093526101000152949350505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126126bb575f5ffd5b83018035915067ffffffffffffffff8211156126d5575f5ffd5b6020019150600581901b36038213156124a8575f5ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b73ffffffffffffffffffffffffffffffffffffffff83168152604060208201525f82518060408401528060208501606085015e5f6060828501015260607fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168401019150509392505050565b5f81518060208401855e5f93019283525090919050565b5f6127e16127db83866127b6565b846127b6565b94935050505056fe60a060405260405161056b38038061056b83398101604081905261002291610331565b61002c828261003e565b506001600160a01b0316608052610413565b610047826100fb565b6040516001600160a01b038316907f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e905f90a28051156100ef576100ea826001600160a01b0316635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100c0573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906100e491906103f3565b82610209565b505050565b6100f76102aa565b5050565b806001600160a01b03163b5f0361013557604051631933b43b60e21b81526001600160a01b03821660048201526024015b60405180910390fd5b807fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5080546001600160a01b0319166001600160a01b0392831617905560408051635c60da1b60e01b815290515f92841691635c60da1b9160048083019260209291908290030181865afa1580156101ae573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906101d291906103f3565b9050806001600160a01b03163b5f036100f757604051634c9c8ce360e01b81526001600160a01b038216600482015260240161012c565b60605f61021684846102cb565b905080801561023757505f3d118061023757505f846001600160a01b03163b115b1561024c576102446102de565b9150506102a4565b801561027657604051639996b31560e01b81526001600160a01b038516600482015260240161012c565b3d15610289576102846102f7565b6102a2565b60405163d6bda27560e01b815260040160405180910390fd5b505b92915050565b34156102c95760405163b398979f60e01b815260040160405180910390fd5b565b5f5f5f835160208501865af49392505050565b6040513d81523d5f602083013e3d602001810160405290565b6040513d5f823e3d81fd5b80516001600160a01b0381168114610318575f5ffd5b919050565b634e487b7160e01b5f52604160045260245ffd5b5f5f60408385031215610342575f5ffd5b61034b83610302565b60208401519092506001600160401b03811115610366575f5ffd5b8301601f81018513610376575f5ffd5b80516001600160401b0381111561038f5761038f61031d565b604051601f8201601f19908116603f011681016001600160401b03811182821017156103bd576103bd61031d565b6040528181528282016020018710156103d4575f5ffd5b8160208401602083015e5f602083830101528093505050509250929050565b5f60208284031215610403575f5ffd5b61040c82610302565b9392505050565b60805161014161042a5f395f602301526101415ff3fe608060405261000c61000e565b005b61001e610019610020565b6100b3565b565b5f7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561008a573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906100ae91906100d1565b905090565b365f5f375f5f365f845af43d5f5f3e8080156100cd573d5ff35b3d5ffd5b5f602082840312156100e1575f5ffd5b815173ffffffffffffffffffffffffffffffffffffffff81168114610104575f5ffd5b939250505056fea264697066735822122073233401b5b30a36ea56fc73de673f38b39b4e254f04f167e9baec0a5006fc3464736f6c634300081d0033a264697066735822122091b1741a73675d84a05b5186d685d8aaf7c10714bfb2601c8154771db981d1a164736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "acceptOwnership";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
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
        readonly name: "initialize";
        readonly inputs: readonly [{
            readonly name: "_params";
            readonly type: "tuple";
            readonly internalType: "struct FactoryInitParams";
            readonly components: readonly [{
                readonly name: "beacon";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "owner";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "emergencyPauser";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "onboardingManager";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "lifiFeeRecipient";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "adapter";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "allowedUnderlyings";
                readonly type: "address[]";
                readonly internalType: "address[]";
            }, {
                readonly name: "feeBounds";
                readonly type: "tuple[4]";
                readonly internalType: "struct FeeBounds[4]";
                readonly components: readonly [{
                    readonly name: "minBps";
                    readonly type: "uint16";
                    readonly internalType: "uint16";
                }, {
                    readonly name: "maxBps";
                    readonly type: "uint16";
                    readonly internalType: "uint16";
                }];
            }, {
                readonly name: "defaultIntegratorShareBps";
                readonly type: "uint16";
                readonly internalType: "uint16";
            }];
        }];
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
        readonly name: "renounceOwnership";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
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
            readonly name: "newOwner";
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
        readonly name: "Initialized";
        readonly inputs: readonly [{
            readonly name: "version";
            readonly type: "uint64";
            readonly indexed: false;
            readonly internalType: "uint64";
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
        readonly name: "OwnershipTransferStarted";
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
        readonly name: "Create2EmptyBytecode";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "FailedDeployment";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "FeeRateAboveCap";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "FeeRateOutOfBounds";
        readonly inputs: readonly [{
            readonly name: "rateBps";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "minBps";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "maxBps";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }];
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
        readonly name: "InvalidInitialization";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidSplit";
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
        readonly name: "NotInitializing";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotOnboardingManager";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "OwnableInvalidOwner";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "OwnableUnauthorizedAccount";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
    }, {
        readonly type: "error";
        readonly name: "RenounceDisabled";
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
