import { Signer, ContractFactory, BytesLike, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { UnitFacet, UnitFacetInterface } from "../UnitFacet";
type UnitFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class UnitFacet__factory extends ContractFactory {
    constructor(...args: UnitFacetConstructorParams);
    deploy(_unitNodePublicKey: PromiseOrValue<BytesLike>, _h1NodePublicKey: PromiseOrValue<BytesLike>, _fieldNodePublicKey: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<UnitFacet>;
    getDeployTransaction(_unitNodePublicKey: PromiseOrValue<BytesLike>, _h1NodePublicKey: PromiseOrValue<BytesLike>, _fieldNodePublicKey: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): UnitFacet;
    connect(signer: Signer): UnitFacet__factory;
    static readonly bytecode = "0x608060405234801561000f575f5ffd5b5060405161225338038061225383398101604081905261002e916100f9565b5f610039848261020c565b506001610046838261020c565b506002610053828261020c565b505050506102c6565b634e487b7160e01b5f52604160045260245ffd5b5f82601f83011261007f575f5ffd5b81516001600160401b038111156100985761009861005c565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100c6576100c661005c565b6040528181528382016020018510156100dd575f5ffd5b8160208501602083015e5f918101602001919091529392505050565b5f5f5f6060848603121561010b575f5ffd5b83516001600160401b03811115610120575f5ffd5b61012c86828701610070565b602086015190945090506001600160401b03811115610149575f5ffd5b61015586828701610070565b604086015190935090506001600160401b03811115610172575f5ffd5b61017e86828701610070565b9150509250925092565b600181811c9082168061019c57607f821691505b6020821081036101ba57634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111561020757805f5260205f20601f840160051c810160208510156101e55750805b601f840160051c820191505b81811015610204575f81556001016101f1565b50505b505050565b81516001600160401b038111156102255761022561005c565b610239816102338454610188565b846101c0565b6020601f82116001811461026b575f83156102545750848201515b5f19600385901b1c1916600184901b178455610204565b5f84815260208120601f198516915b8281101561029a578785015182556020948501946001909201910161027a565b50848210156102b757868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b611f80806102d35f395ff3fe608060405260043610610028575f3560e01c80636034c95b1461002c5780639d849e5614610041575b5f5ffd5b61003f61003a366004611a58565b610054565b005b61003f61004f366004611abd565b6102c7565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df3447611b83565b9050846101048160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561013b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610178576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101b5576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156101f3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610231576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808801518890896103e7808260e0015114610279576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61028b8c608001518d60c0015161053d565b6102958c8c6105f1565b505050505050505f479050818111156102bc576102bc5f846102b78585611b83565b610848565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610342576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103523447611b83565b905086806101000151610391576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156103cf576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886103f28160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610429576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610466576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104a3576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808a01518a908b6103e7808260e00151146104eb576040517fb86ac1ef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104ff8e5f01518f60c001518f8f3361087d565b60c08f015261050e8e8c6105f1565b505050505050505f47905081811115610530576105305f846102b78585611b83565b50505f9091555050505050565b805f03610576576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105cf57803410156105cb576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6105cb73ffffffffffffffffffffffffffffffffffffffff83163330846109bf565b61062f6040518060400160405280600981526020017f6d696e416d6f756e740000000000000000000000000000000000000000000000815250610a17565b61063c8260c00151610aa9565b66b1a2bc2ec500008260c001511015610681576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61068e6020820182611bbb565b905060c3146106c9576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6106d76020830183611c23565b604051602001610712919060609190911b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016815260140190565b6040516020818303038152906040528051906020012090506107cc815f5f805461073b90611c43565b80601f016020809104026020016040519081016040528092919081815260200182805461076790611c43565b80156107b25780601f10610789576101008083540402835291602001916107b2565b820191905f5260205f20905b81548152906001019060200180831161079557829003601f168201915b50505050508580602001906107c79190611bbb565b610b3a565b6107df8160416001805461073b90611c43565b6107f28160826002805461073b90611c43565b61080c6108026020840184611c23565b8460c00151610ca6565b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18360405161083b9190611cda565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff83166108725761086d8282610ca6565b505050565b61086d838383610d13565b5f828082036108b8576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856108c6600185611b83565b8181106108d5576108d5611ded565b90506020028101906108e79190611e1a565b6108f8906080810190606001611c23565b90505f61090482610d81565b905073ffffffffffffffffffffffffffffffffffffffff821661092e5761092b3482611b83565b90505b5f6109398888610dcb565b90506109458888610ed5565b6109528a89898985610f41565b5f8261095d85610d81565b6109679190611b83565b9050898110156109b1576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610a0a57637939f4245f526004601cfd5b5f60605260405250505050565b610aa681604051602401610a2b9190611e56565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f41304fac00000000000000000000000000000000000000000000000000000000179052611103565b50565b610aa681604051602401610abf91815260200190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167ff5b1bba900000000000000000000000000000000000000000000000000000000179052611103565b604080518386018035926020808301359391909201355f90811a929091610b6391899101611e68565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201205f8085529184018084528d905260ff86169284019290925260608301879052608083018690529092509060019060a0016020604051602081039080840390855afa158015610be9573d5f5f3e3d5ffd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff81161580610c6357508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b15610c9a576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8216610cf3576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105cb73ffffffffffffffffffffffffffffffffffffffff831682611123565b73ffffffffffffffffffffffffffffffffffffffff8216610d60576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61086d73ffffffffffffffffffffffffffffffffffffffff8416838361113c565b5f73ffffffffffffffffffffffffffffffffffffffff821615610dc357610dbe73ffffffffffffffffffffffffffffffffffffffff831630611185565b610dc5565b475b92915050565b6060815f8167ffffffffffffffff811115610de857610de8611823565b604051908082528060200260200182016040528015610e11578160200160208202803683370190505b5090505f5f5b83811015610eca57868682818110610e3157610e31611ded565b9050602002810190610e439190611e1a565b610e54906080810190606001611c23565b9150610e5f82610d81565b838281518110610e7157610e71611ded565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610ec25734838281518110610eaa57610eaa611ded565b60200260200101818151610ebe9190611b83565b9052505b600101610e17565b509095945050505050565b5f5b8181101561086d5736838383818110610ef257610ef2611ded565b9050602002810190610f049190611e1a565b9050610f1660e0820160c08301611e7e565b15610f3857610f38610f2e6060830160408401611c23565b826080013561053d565b50600101610ed7565b83838383825f5b818110156110e957368a8a83818110610f6357610f63611ded565b9050602002810190610f759190611e1a565b9050610fa4610f8a6060830160408401611c23565b73ffffffffffffffffffffffffffffffffffffffff161590565b806110065750611006610fbd6040830160208401611c23565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561101d575061101d610fbd6020830183611c23565b80156110a057506110a061103460a0830183611bbb565b611042916004915f91611e97565b61104b91611ebe565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6110d6576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110e08c826111b8565b50600101610f48565b50506110f8848484845f61142b565b505050505050505050565b80516a636f6e736f6c652e6c6f67602083015f808483855afa5050505050565b5f385f3884865af16105cb5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661117c576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6111d06111c86020830183611c23565b6017903b1190565b611206576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611245576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611259610f8a6060850160408601611c23565b611263575f611269565b82608001355b90505f61128461127f6080860160608701611c23565b610d81565b9050815f036112ba576112ba6112a06060860160408701611c23565b6112b06040870160208801611c23565b8660800135611642565b5f806112c96020870187611c23565b73ffffffffffffffffffffffffffffffffffffffff16846112ed60a0890189611bbb565b6040516112fb929190611f24565b5f6040518083038185875af1925050503d805f8114611335576040519150601f19603f3d011682016040523d82523d5f602084013e61133a565b606091505b50915091508161134d5761134d8161166e565b5f61136161127f6080890160608a01611c23565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861139260208a018a611c23565b6113a260608b0160408c01611c23565b6113b260808c0160608d01611c23565b8b608001358987116113c457866113ce565b6113ce8a88611b83565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f868261143a600182611b83565b81811061144957611449611ded565b905060200281019061145b9190611e1a565b61146c906080810190606001611c23565b90505f5f5f5f5f5f5f5b888110156116325761148960018a611b83565b81108015611498575088600114155b15611573578d8d828181106114af576114af611ded565b90506020028101906114c19190611e1a565b6114d2906080810190606001611c23565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611573578a818151811061151957611519611ded565b602002602001015161152a87610d81565b6115349190611b83565b965073ffffffffffffffffffffffffffffffffffffffff861615611558575f61155a565b895b93508387111561157357611573868d6102b7878b611b83565b8d8d8281811061158557611585611ded565b90506020028101906115979190611e1a565b6115a8906060810190604001611c23565b94506115b385610d81565b925073ffffffffffffffffffffffffffffffffffffffff8516156115d7575f6115d9565b895b9150818311801561161657508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561162a5761162a858d6102b78587611b83565b600101611476565b5050505050505050505050505050565b61086d8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611678565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff84161561179f5773ffffffffffffffffffffffffffffffffffffffff83166116e1576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611754573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906117789190611f33565b101561179f5761179f73ffffffffffffffffffffffffffffffffffffffff851684836117a5565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f5114171661117c575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661117c57633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561187457611874611823565b60405290565b5f82601f830112611889575f5ffd5b813567ffffffffffffffff8111156118a3576118a3611823565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff811182821017156118f0576118f0611823565b604052818152838201602001851015611907575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611946575f5ffd5b919050565b80358015158114611946575f5ffd5b5f610140828403121561196b575f5ffd5b611973611850565b823581529050602082013567ffffffffffffffff811115611992575f5ffd5b61199e8482850161187a565b602083015250604082013567ffffffffffffffff8111156119bd575f5ffd5b6119c98482850161187a565b6040830152506119db60608301611923565b60608201526119ec60808301611923565b60808201526119fd60a08301611923565b60a082015260c0828101359082015260e08083013590820152611a23610100830161194b565b610100820152611a36610120830161194b565b61012082015292915050565b5f60408284031215611a52575f5ffd5b50919050565b5f5f60408385031215611a69575f5ffd5b823567ffffffffffffffff811115611a7f575f5ffd5b611a8b8582860161195a565b925050602083013567ffffffffffffffff811115611aa7575f5ffd5b611ab385828601611a42565b9150509250929050565b5f5f5f5f60608587031215611ad0575f5ffd5b843567ffffffffffffffff811115611ae6575f5ffd5b611af28782880161195a565b945050602085013567ffffffffffffffff811115611b0e575f5ffd5b8501601f81018713611b1e575f5ffd5b803567ffffffffffffffff811115611b34575f5ffd5b8760208260051b8401011115611b48575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611b6b575f5ffd5b611b7787828801611a42565b91505092959194509250565b81810381811115610dc5577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611bee575f5ffd5b83018035915067ffffffffffffffff821115611c08575f5ffd5b602001915036819003821315611c1c575f5ffd5b9250929050565b5f60208284031215611c33575f5ffd5b611c3c82611923565b9392505050565b600181811c90821680611c5757607f821691505b602082108103611a52577f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611d01610160840182611c8e565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611d3c8282611c8e565b9150506060840151611d66608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611dd561012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611e4c575f5ffd5b9190910192915050565b602081525f611c3c6020830184611c8e565b5f82518060208501845e5f920191825250919050565b5f60208284031215611e8e575f5ffd5b611c3c8261194b565b5f5f85851115611ea5575f5ffd5b83861115611eb1575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611f1d577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215611f43575f5ffd5b505191905056fea2646970667358221220bf32e87a9229fa5b9efe6abc28f8db0958bf10ca84a560eedbb19bf625b6472964736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_unitNodePublicKey";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_h1NodePublicKey";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_fieldNodePublicKey";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaUnit";
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
            readonly name: "_unitData";
            readonly type: "tuple";
            readonly internalType: "struct UnitFacet.UnitData";
            readonly components: readonly [{
                readonly name: "depositAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "signatures";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaUnit";
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
            readonly name: "_unitData";
            readonly type: "tuple";
            readonly internalType: "struct UnitFacet.UnitData";
            readonly components: readonly [{
                readonly name: "depositAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "signatures";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "AssetSwapped";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }, {
            readonly name: "dex";
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
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChain";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChainBytes32";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
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
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidDestinationChain";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidQuote";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidSendingToken";
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
    static createInterface(): UnitFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): UnitFacet;
}
export {};
