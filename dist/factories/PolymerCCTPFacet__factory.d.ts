import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { PolymerCCTPFacet, PolymerCCTPFacetInterface } from "../PolymerCCTPFacet";
type PolymerCCTPFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PolymerCCTPFacet__factory extends ContractFactory {
    constructor(...args: PolymerCCTPFacetConstructorParams);
    deploy(_tokenMessenger: PromiseOrValue<string>, _usdc: PromiseOrValue<string>, _polymerFeeReceiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PolymerCCTPFacet>;
    getDeployTransaction(_tokenMessenger: PromiseOrValue<string>, _usdc: PromiseOrValue<string>, _polymerFeeReceiver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): PolymerCCTPFacet;
    connect(signer: Signer): PolymerCCTPFacet__factory;
    static readonly bytecode = "0x60e060405234801561000f575f5ffd5b506040516125c03803806125c083398101604081905261002e916100b3565b6001600160a01b038316158061004b57506001600160a01b038216155b8061005d57506001600160a01b038116155b1561007b576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0392831660805290821660a0521660c0526100f3565b80516001600160a01b03811681146100ae575f5ffd5b919050565b5f5f5f606084860312156100c5575f5ffd5b6100ce84610098565b92506100dc60208501610098565b91506100ea60408501610098565b90509250925092565b60805160a05160c0516124576101695f395f818161011c015261080901525f818160c0015281816102710152818161037a015281816104c9015281816106b4015281816107e8015281816109360152610abd01525f818161014f01528181610666015281816108d30152610a7601526124575ff3fe608060405260043610610063575f3560e01c806389a302711161004157806389a30271146100af5780638eb8fd561461010b578063b8b32ff71461013e575f5ffd5b8063173457ef14610067578063780c82ab14610088578063895359be1461009b575b5f5ffd5b348015610072575f5ffd5b50610086610081366004611f94565b610171565b005b610086610096366004611fe0565b6103bd565b3480156100a6575f5ffd5b50610086610621565b3480156100ba575f5ffd5b506100e27f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b348015610116575f5ffd5b506100e27f000000000000000000000000000000000000000000000000000000000000000081565b348015610149575f5ffd5b506100e27f000000000000000000000000000000000000000000000000000000000000000081565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101ec576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815560c0830151839083905f03610231576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468260e001510361026e576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b847f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff16146102f9576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610100015115610337576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610375576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6103a57f000000000000000000000000000000000000000000000000000000000000000033308c60c00151610721565b6103af89896107e3565b50505f909455505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610438576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f610448344761208d565b905086848160c001515f03610489576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468260e00151036104c6576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b887f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff1614610551576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a80610100015161058e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b806101200151156105cc576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105e08d5f01518e60c001518e8e33610d22565b60c08e01526105ef8d8b6107e3565b50479450505050828211159050610614576106145f8461060f858561208d565b610e64565b50505f9091555050505050565b610629610e99565b6040517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660048301527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60248301527f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b3906044016020604051808303815f875af11580156106fa573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061071e91906120c5565b50565b73ffffffffffffffffffffffffffffffffffffffff841661076e576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166107bb576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107dd73ffffffffffffffffffffffffffffffffffffffff8516848484610f0e565b50505050565b61082f7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000008335610f66565b60c08201515f906108429083359061208d565b60e084015160a08501519192509073ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f114610a185760a084015173ffffffffffffffffffffffffffffffffffffffff166108d1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16638e0250ee8361091784610fd4565b60a08089015173ffffffffffffffffffffffffffffffffffffffff16907f0000000000000000000000000000000000000000000000000000000000000000905f9060208b01359061096d908c0160808d016120e7565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b168152600481019790975263ffffffff9586166024880152604487019490945273ffffffffffffffffffffffffffffffffffffffff9092166064860152608485015260a48401521660c482015260e4015f604051808303815f87803b1580156109fd575f5ffd5b505af1158015610a0f573d5f5f3e3d5ffd5b50505050610bdc565b6040830135610a53576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f660416edef1601be8214610a6c578360400135610a72565b83606001355b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16638e0250ee84610aba85610fd4565b847f00000000000000000000000000000000000000000000000000000000000000005f60208b0135610af260a08d0160808e016120e7565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b168152600481019790975263ffffffff9586166024880152604487019490945273ffffffffffffffffffffffffffffffffffffffff9092166064860152608485015260a48401521660c482015260e4015f604051808303815f87803b158015610b82575f5ffd5b505af1158015610b94573d5f5f3e3d5ffd5b5050505081855f01517f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c8660400135604051610bd291815260200190565b60405180910390a3505b60c08401517f324bb680d8f34b685b89431a2429f01c9b71c00ab9a18e3ad887c464200f1c5b908435610c1560a08701608088016120e7565b60408051938452602084019290925263ffffffff169082015260600160405180910390a17fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1604051806101400160405280865f015181526020018660200151815260200186604001518152602001866060015173ffffffffffffffffffffffffffffffffffffffff168152602001866080015173ffffffffffffffffffffffffffffffffffffffff1681526020018660a0015173ffffffffffffffffffffffffffffffffffffffff168152602001848152602001838152602001866101000151151581526020018661012001511515815250604051610d149190612156565b60405180910390a150505050565b5f82808203610d5d576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610d6b60018561208d565b818110610d7a57610d7a612269565b9050602002810190610d8c9190612296565b610d9d9060808101906060016122d2565b90505f610da982611138565b905073ffffffffffffffffffffffffffffffffffffffff8216610dd357610dd0348261208d565b90505b5f610dde8888611182565b9050610dea888861128c565b610df78a898989856112f8565b5f82610e0285611138565b610e0c919061208d565b905089811015610e56576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610e8e57610e898282611540565b505050565b610e89838383610f66565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610f0c576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610f5957637939f4245f526004601cfd5b5f60605260405250505050565b73ffffffffffffffffffffffffffffffffffffffff8216610fb3576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e8973ffffffffffffffffffffffffffffffffffffffff841683836115b1565b5f81600103610fe457505f919050565b8161a86a03610ff557506001919050565b81600a0361100557506002919050565b8161a4b10361101657506003919050565b660416edef1601be820361102c57506005919050565b816121050361103d57506006919050565b8160890361104d57506007919050565b8160820361105d5750600a919050565b8161e7080361106e5750600b919050565b8162013d48036110805750600c919050565b816092036110905750600d919050565b816101e0036110a15750600e919050565b81608f036110b15750600f919050565b81610531036110c257506010919050565b816032036110d257506012919050565b816103e7036110e357506013919050565b8161def1036110f457506015919050565b81620182320361110657506016919050565b6040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff82161561117a5761117573ffffffffffffffffffffffffffffffffffffffff8316306115fa565b61117c565b475b92915050565b6060815f8167ffffffffffffffff81111561119f5761119f611d56565b6040519080825280602002602001820160405280156111c8578160200160208202803683370190505b5090505f5f5b83811015611281578686828181106111e8576111e8612269565b90506020028101906111fa9190612296565b61120b9060808101906060016122d2565b915061121682611138565b83828151811061122857611228612269565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611279573483828151811061126157611261612269565b60200260200101818151611275919061208d565b9052505b6001016111ce565b509095945050505050565b5f5b81811015610e8957368383838181106112a9576112a9612269565b90506020028101906112bb9190612296565b90506112cd60e0820160c083016122eb565b156112ef576112ef6112e560608301604084016122d2565b826080013561162d565b5060010161128e565b83838383825f80805b8381101561152457368c8c8381811061131c5761131c612269565b905060200281019061132e9190612296565b905061133d60208201826122d2565b935061134f60408201602083016122d2565b92506113f28461136260a0840184612306565b611370916004915f9161236e565b61137991612395565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b15806114da575061142661140c60608301604084016122d2565b73ffffffffffffffffffffffffffffffffffffffff161590565b15801561145f57508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b80156114da575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b15611511576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61151b8e826116dd565b50600101611301565b50505050611535848484845f611950565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff821661158d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115ad73ffffffffffffffffffffffffffffffffffffffff831682611b67565b5050565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166115f1576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b805f03611666576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166116bb57803410156115ad576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115ad73ffffffffffffffffffffffffffffffffffffffff8316333084610f0e565b6116f56116ed60208301836122d2565b6017903b1190565b61172b576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f81900361176a576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61177e61140c60608501604086016122d2565b611788575f61178e565b82608001355b90505f6117a96117a460808601606087016122d2565b611138565b9050815f036117df576117df6117c560608601604087016122d2565b6117d560408701602088016122d2565b8660800135611b80565b5f806117ee60208701876122d2565b73ffffffffffffffffffffffffffffffffffffffff168461181260a0890189612306565b6040516118209291906123fb565b5f6040518083038185875af1925050503d805f811461185a576040519150601f19603f3d011682016040523d82523d5f602084013e61185f565b606091505b5091509150816118725761187281611bac565b5f6118866117a46080890160608a016122d2565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886118b760208a018a6122d2565b6118c760608b0160408c016122d2565b6118d760808c0160608d016122d2565b8b608001358987116118e957866118f3565b6118f38a8861208d565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f868261195f60018261208d565b81811061196e5761196e612269565b90506020028101906119809190612296565b6119919060808101906060016122d2565b90505f5f5f5f5f5f5f5b88811015611b57576119ae60018a61208d565b811080156119bd575088600114155b15611a98578d8d828181106119d4576119d4612269565b90506020028101906119e69190612296565b6119f79060808101906060016122d2565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611a98578a8181518110611a3e57611a3e612269565b6020026020010151611a4f87611138565b611a59919061208d565b965073ffffffffffffffffffffffffffffffffffffffff861615611a7d575f611a7f565b895b935083871115611a9857611a98868d61060f878b61208d565b8d8d82818110611aaa57611aaa612269565b9050602002810190611abc9190612296565b611acd9060608101906040016122d2565b9450611ad885611138565b925073ffffffffffffffffffffffffffffffffffffffff851615611afc575f611afe565b895b91508183118015611b3b57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611b4f57611b4f858d61060f858761208d565b60010161199b565b5050505050505050505050505050565b5f385f3884865af16115ad5763b12d13eb5f526004601cfd5b610e898383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611bb6565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff8416156107dd5773ffffffffffffffffffffffffffffffffffffffff8316611c1f576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611c92573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611cb6919061240a565b10156107dd576107dd73ffffffffffffffffffffffffffffffffffffffff8516848381601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f511417166115f1575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f511417166115f157633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611da757611da7611d56565b60405290565b5f82601f830112611dbc575f5ffd5b813567ffffffffffffffff811115611dd657611dd6611d56565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611e2357611e23611d56565b604052818152838201602001851015611e3a575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611e79575f5ffd5b919050565b801515811461071e575f5ffd5b8035611e7981611e7e565b5f6101408284031215611ea7575f5ffd5b611eaf611d83565b823581529050602082013567ffffffffffffffff811115611ece575f5ffd5b611eda84828501611dad565b602083015250604082013567ffffffffffffffff811115611ef9575f5ffd5b611f0584828501611dad565b604083015250611f1760608301611e56565b6060820152611f2860808301611e56565b6080820152611f3960a08301611e56565b60a082015260c0828101359082015260e08083013590820152611f5f6101008301611e8b565b610100820152611f726101208301611e8b565b61012082015292915050565b5f60a08284031215611f8e575f5ffd5b50919050565b5f5f60c08385031215611fa5575f5ffd5b823567ffffffffffffffff811115611fbb575f5ffd5b611fc785828601611e96565b925050611fd78460208501611f7e565b90509250929050565b5f5f5f5f60e08587031215611ff3575f5ffd5b843567ffffffffffffffff811115612009575f5ffd5b61201587828801611e96565b945050602085013567ffffffffffffffff811115612031575f5ffd5b8501601f81018713612041575f5ffd5b803567ffffffffffffffff811115612057575f5ffd5b8760208260051b840101111561206b575f5ffd5b602091909101935091506120828660408701611f7e565b905092959194509250565b8181038181111561117c577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f602082840312156120d5575f5ffd5b81516120e081611e7e565b9392505050565b5f602082840312156120f7575f5ffd5b813563ffffffff811681146120e0575f5ffd5b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f6020830151610140604084015261217d61016084018261210a565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526121b8828261210a565b91505060608401516121e2608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161225161012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126122c8575f5ffd5b9190910192915050565b5f602082840312156122e2575f5ffd5b6120e082611e56565b5f602082840312156122fb575f5ffd5b81356120e081611e7e565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612339575f5ffd5b83018035915067ffffffffffffffff821115612353575f5ffd5b602001915036819003821315612367575f5ffd5b9250929050565b5f5f8585111561237c575f5ffd5b83861115612388575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156123f4577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f6020828403121561241a575f5ffd5b505191905056fea2646970667358221220fc489adfb48d6e0bd21ea8850e8fed0f9e52a58dc6f2570ba89c176469f834ec64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_tokenMessenger";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_usdc";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_polymerFeeReceiver";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "POLYMER_FEE_RECEIVER";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address payable";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "TOKEN_MESSENGER";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ITokenMessenger";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "USDC";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "initPolymerCCTP";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaPolymerCCTP";
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
            readonly name: "_polymerData";
            readonly type: "tuple";
            readonly internalType: "struct PolymerCCTPFacet.PolymerCCTPData";
            readonly components: readonly [{
                readonly name: "polymerTokenFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxCCTPFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "solanaReceiverATA";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "minFinalityThreshold";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaPolymerCCTP";
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
            readonly name: "_polymerData";
            readonly type: "tuple";
            readonly internalType: "struct PolymerCCTPFacet.PolymerCCTPData";
            readonly components: readonly [{
                readonly name: "polymerTokenFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "maxCCTPFee";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "solanaReceiverATA";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "minFinalityThreshold";
                readonly type: "uint32";
                readonly internalType: "uint32";
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
        readonly type: "event";
        readonly name: "PolymerCCTPFeeSent";
        readonly inputs: readonly [{
            readonly name: "bridgeAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "polymerFee";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "minFinalityThreshold";
            readonly type: "uint32";
            readonly indexed: false;
            readonly internalType: "uint32";
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
        readonly name: "InvalidCallData";
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
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "OnlyContractOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): PolymerCCTPFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PolymerCCTPFacet;
}
export {};
