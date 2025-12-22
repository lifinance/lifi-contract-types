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
    static readonly bytecode = "0x60e060405234801561000f575f5ffd5b5060405161253338038061253383398101604081905261002e916100b7565b60015f556001600160a01b038316158061004f57506001600160a01b038216155b8061006157506001600160a01b038116155b1561007f576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0392831660805290821660a0521660c0526100f7565b80516001600160a01b03811681146100b2575f5ffd5b919050565b5f5f5f606084860312156100c9575f5ffd5b6100d28461009c565b92506100e06020850161009c565b91506100ee6040850161009c565b90509250925092565b60805160a05160c0516123c761016c5f395f818160fd015261081501525f818160a101528181610206015281816103f6015281816104ea015281816105f3015281816107f40152818161093e0152610aaa01525f8181610130015281816103a8015281816108d90152610a5b01526123c75ff3fe608060405260043610610063575f3560e01c80638eb8fd56116100415780638eb8fd56146100ec578063b8b32ff71461011f578063f3156a2d14610152575f5ffd5b80634019dcea14610067578063895359be1461007c57806389a3027114610090575b5f5ffd5b61007a610075366004611f04565b610171565b005b348015610087575f5ffd5b5061007a610363565b34801561009b575f5ffd5b506100c37f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156100f7575f5ffd5b506100c37f000000000000000000000000000000000000000000000000000000000000000081565b34801561012a575f5ffd5b506100c37f000000000000000000000000000000000000000000000000000000000000000081565b34801561015d575f5ffd5b5061007a61016c366004611fb1565b610463565b61017961063b565b335f6101853447611ffd565b905085838160c001515f036101c6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468260e0015103610203576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b877f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff161461028e576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b898061010001516102cb576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a80610120015115610309576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61031d8c5f01518d60c001518d8d336106b1565b60c08d015261032c8c8a6107ef565b50479450505050828211159050610351576103515f8461034c8585611ffd565b610d15565b50505061035d60015f55565b50505050565b61036b610d4a565b6040517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660048301527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60248301527f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b3906044016020604051808303815f875af115801561043c573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104609190612035565b50565b61046b61063b565b81818160c001515f036104aa576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468260e00151036104e7576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b837f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff1614610572576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156105b0576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86806101200151156105ee576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61061e7f000000000000000000000000000000000000000000000000000000000000000033308b60c00151610dbf565b61062888886107ef565b50505050505061063760015f55565b5050565b60025f54036106ab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b60025f55565b5f828082036106ec576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856106fa600185611ffd565b81811061070957610709612057565b905060200281019061071b9190612084565b61072c9060808101906060016120c0565b90505f61073882610e7b565b905073ffffffffffffffffffffffffffffffffffffffff82166107625761075f3482611ffd565b90505b5f61076d8888610ec5565b90506107798888610fcf565b6107868a8989898561103b565b5f8261079185610e7b565b61079b9190611ffd565b9050898110156107e1576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044016106a2565b9a9950505050505050505050565b61083b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000833561129a565b60c08201515f9061084e90833590611ffd565b60a084015190915073ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f114610a1e5760a083015173ffffffffffffffffffffffffffffffffffffffff166108d7576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16638e0250ee826109218660e00151611308565b60a087015173ffffffffffffffffffffffffffffffffffffffff167f00000000000000000000000000000000000000000000000000000000000000005f602089013561097360808b0160608c016120d9565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b168152600481019790975263ffffffff9586166024880152604487019490945273ffffffffffffffffffffffffffffffffffffffff9092166064860152608485015260a48401521660c482015260e4015f604051808303815f87803b158015610a03575f5ffd5b505af1158015610a15573d5f5f3e3d5ffd5b50505050610bcc565b6040820135610a59576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16638e0250ee82610aa38660e00151611308565b60408601357f00000000000000000000000000000000000000000000000000000000000000005f6020890135610adf60808b0160608c016120d9565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b168152600481019790975263ffffffff9586166024880152604487019490945273ffffffffffffffffffffffffffffffffffffffff9092166064860152608485015260a48401521660c482015260e4015f604051808303815f87803b158015610b6f575f5ffd5b505af1158015610b81573d5f5f3e3d5ffd5b505050508260e00151835f01517f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c8460400135604051610bc391815260200190565b60405180910390a35b60c08301517f324bb680d8f34b685b89431a2429f01c9b71c00ab9a18e3ad887c464200f1c5b908335610c0560808601606087016120d9565b60408051938452602084019290925263ffffffff169082015260600160405180910390a17fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1604051806101400160405280855f015181526020018560200151815260200185604001518152602001856060015173ffffffffffffffffffffffffffffffffffffffff168152602001856080015173ffffffffffffffffffffffffffffffffffffffff1681526020018560a0015173ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018560e001518152602001856101000151151581526020018561012001511515815250604051610d089190612148565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff8316610d3f57610d3a828261145c565b505050565b610d3a83838361129a565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610dbd576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b73ffffffffffffffffffffffffffffffffffffffff8416610e0c576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610e59576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61035d73ffffffffffffffffffffffffffffffffffffffff85168484846114c9565b5f73ffffffffffffffffffffffffffffffffffffffff821615610ebd57610eb873ffffffffffffffffffffffffffffffffffffffff831630611521565b610ebf565b475b92915050565b6060815f8167ffffffffffffffff811115610ee257610ee2611cc6565b604051908082528060200260200182016040528015610f0b578160200160208202803683370190505b5090505f5f5b83811015610fc457868682818110610f2b57610f2b612057565b9050602002810190610f3d9190612084565b610f4e9060808101906060016120c0565b9150610f5982610e7b565b838281518110610f6b57610f6b612057565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610fbc5734838281518110610fa457610fa4612057565b60200260200101818151610fb89190611ffd565b9052505b600101610f11565b509095945050505050565b5f5b81811015610d3a5736838383818110610fec57610fec612057565b9050602002810190610ffe9190612084565b905061101060e0820160c0830161225b565b156110325761103261102860608301604084016120c0565b8260800135611554565b50600101610fd1565b83838383825f5b8181101561128057368a8a8381811061105d5761105d612057565b905060200281019061106f9190612084565b905061111e61108160208301836120c0565b61108e60a0840184612276565b61109c916004915f916122de565b6110a591612305565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b1580611236575061115261113860608301604084016120c0565b73ffffffffffffffffffffffffffffffffffffffff161590565b1580156111a6575061116760208201826120c0565b73ffffffffffffffffffffffffffffffffffffffff1661118d60408301602084016120c0565b73ffffffffffffffffffffffffffffffffffffffff1614155b801561123657506112346111c060408301602084016120c0565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff1690565b155b1561126d576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112778c82611604565b50600101611042565b505061128f848484845f611877565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff82166112e7576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d3a73ffffffffffffffffffffffffffffffffffffffff84168383611a8e565b5f8160010361131857505f919050565b8161a86a0361132957506001919050565b81600a0361133957506002919050565b8161a4b10361134a57506003919050565b660416edef1601be820361136057506005919050565b816121050361137157506006919050565b8160890361138157506007919050565b816082036113915750600a919050565b8161e708036113a25750600b919050565b8162013d48036113b45750600c919050565b816092036113c45750600d919050565b816101e0036113d55750600e919050565b81610531036113e657506010919050565b816032036113f657506012919050565b816103e70361140757506013919050565b8161def10361141857506015919050565b81620182320361142a57506016919050565b6040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166114a9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61063773ffffffffffffffffffffffffffffffffffffffff831682611ad7565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661151457637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b805f0361158d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166115e25780341015610637576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61063773ffffffffffffffffffffffffffffffffffffffff83163330846114c9565b61161c61161460208301836120c0565b6017903b1190565b611652576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611691576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6116a561113860608501604086016120c0565b6116af575f6116b5565b82608001355b90505f6116d06116cb60808601606087016120c0565b610e7b565b9050815f03611706576117066116ec60608601604087016120c0565b6116fc60408701602088016120c0565b8660800135611af0565b5f8061171560208701876120c0565b73ffffffffffffffffffffffffffffffffffffffff168461173960a0890189612276565b60405161174792919061236b565b5f6040518083038185875af1925050503d805f8114611781576040519150601f19603f3d011682016040523d82523d5f602084013e611786565b606091505b5091509150816117995761179981611b1c565b5f6117ad6116cb6080890160608a016120c0565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886117de60208a018a6120c0565b6117ee60608b0160408c016120c0565b6117fe60808c0160608d016120c0565b8b60800135898711611810578661181a565b61181a8a88611ffd565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611886600182611ffd565b81811061189557611895612057565b90506020028101906118a79190612084565b6118b89060808101906060016120c0565b90505f5f5f5f5f5f5f5b88811015611a7e576118d560018a611ffd565b811080156118e4575088600114155b156119bf578d8d828181106118fb576118fb612057565b905060200281019061190d9190612084565b61191e9060808101906060016120c0565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146119bf578a818151811061196557611965612057565b602002602001015161197687610e7b565b6119809190611ffd565b965073ffffffffffffffffffffffffffffffffffffffff8616156119a4575f6119a6565b895b9350838711156119bf576119bf868d61034c878b611ffd565b8d8d828181106119d1576119d1612057565b90506020028101906119e39190612084565b6119f49060608101906040016120c0565b94506119ff85610e7b565b925073ffffffffffffffffffffffffffffffffffffffff851615611a23575f611a25565b895b91508183118015611a6257508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611a7657611a76858d61034c8587611ffd565b6001016118c2565b5050505050505050505050505050565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611ace576390b8ec185f526004601cfd5b5f603452505050565b5f385f3884865af16106375763b12d13eb5f526004601cfd5b610d3a8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611b26565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff84161561035d5773ffffffffffffffffffffffffffffffffffffffff8316611b8f576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611c02573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611c26919061237a565b101561035d5761035d73ffffffffffffffffffffffffffffffffffffffff8516848381601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611ace575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611ace57633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611d1757611d17611cc6565b60405290565b5f82601f830112611d2c575f5ffd5b813567ffffffffffffffff811115611d4657611d46611cc6565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611d9357611d93611cc6565b604052818152838201602001851015611daa575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611de9575f5ffd5b919050565b8015158114610460575f5ffd5b8035611de981611dee565b5f6101408284031215611e17575f5ffd5b611e1f611cf3565b823581529050602082013567ffffffffffffffff811115611e3e575f5ffd5b611e4a84828501611d1d565b602083015250604082013567ffffffffffffffff811115611e69575f5ffd5b611e7584828501611d1d565b604083015250611e8760608301611dc6565b6060820152611e9860808301611dc6565b6080820152611ea960a08301611dc6565b60a082015260c0828101359082015260e08083013590820152611ecf6101008301611dfb565b610100820152611ee26101208301611dfb565b61012082015292915050565b5f60808284031215611efe575f5ffd5b50919050565b5f5f5f5f60c08587031215611f17575f5ffd5b843567ffffffffffffffff811115611f2d575f5ffd5b611f3987828801611e06565b945050602085013567ffffffffffffffff811115611f55575f5ffd5b8501601f81018713611f65575f5ffd5b803567ffffffffffffffff811115611f7b575f5ffd5b8760208260051b8401011115611f8f575f5ffd5b60209190910193509150611fa68660408701611eee565b905092959194509250565b5f5f60a08385031215611fc2575f5ffd5b823567ffffffffffffffff811115611fd8575f5ffd5b611fe485828601611e06565b925050611ff48460208501611eee565b90509250929050565b81810381811115610ebf577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f60208284031215612045575f5ffd5b815161205081611dee565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126120b6575f5ffd5b9190910192915050565b5f602082840312156120d0575f5ffd5b61205082611dc6565b5f602082840312156120e9575f5ffd5b813563ffffffff81168114612050575f5ffd5b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f6020830151610140604084015261216f6101608401826120fc565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526121aa82826120fc565b91505060608401516121d4608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161224361012085018215159052565b50610120840151801515610140850152509392505050565b5f6020828403121561226b575f5ffd5b813561205081611dee565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126122a9575f5ffd5b83018035915067ffffffffffffffff8211156122c3575f5ffd5b6020019150368190038213156122d7575f5ffd5b9250929050565b5f5f858511156122ec575f5ffd5b838611156122f8575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612364577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f6020828403121561238a575f5ffd5b505191905056fea26469706673582212203c20c18bf50422034a4ba06d567c911ee29854448a1ace4d645f43510a4b6c5364736f6c634300081d0033";
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
    }];
    static createInterface(): PolymerCCTPFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PolymerCCTPFacet;
}
export {};
