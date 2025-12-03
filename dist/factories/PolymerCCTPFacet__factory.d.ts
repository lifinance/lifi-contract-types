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
    static readonly bytecode = "0x60e060405234801561000f575f5ffd5b5060405161249638038061249683398101604081905261002e916100b7565b60015f556001600160a01b038316158061004f57506001600160a01b038216155b8061006157506001600160a01b038116155b1561007f576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0392831660805290821660a0521660c0526100f7565b80516001600160a01b03811681146100b2575f5ffd5b919050565b5f5f5f606084860312156100c9575f5ffd5b6100d28461009c565b92506100e06020850161009c565b91506100ee6040850161009c565b90509250925092565b60805160a05160c05161232a61016c5f395f818160fd015261081501525f818160a101528181610206015281816103f6015281816104ea015281816105f3015281816107f40152818161093e0152610aaa01525f8181610130015281816103a8015281816108d90152610a5b015261232a5ff3fe608060405260043610610063575f3560e01c80638eb8fd56116100415780638eb8fd56146100ec578063b8b32ff71461011f578063f3156a2d14610152575f5ffd5b80634019dcea14610067578063895359be1461007c57806389a3027114610090575b5f5ffd5b61007a610075366004611e67565b610171565b005b348015610087575f5ffd5b5061007a610363565b34801561009b575f5ffd5b506100c37f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156100f7575f5ffd5b506100c37f000000000000000000000000000000000000000000000000000000000000000081565b34801561012a575f5ffd5b506100c37f000000000000000000000000000000000000000000000000000000000000000081565b34801561015d575f5ffd5b5061007a61016c366004611f14565b610463565b61017961063b565b335f6101853447611f60565b905085838160c001515f036101c6576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468260e0015103610203576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b877f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff161461028e576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b898061010001516102cb576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a80610120015115610309576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61031d8c5f01518d60c001518d8d336106b1565b60c08d015261032c8c8a6107ef565b50479450505050828211159050610351576103515f8461034c8585611f60565b610d15565b50505061035d60015f55565b50505050565b61036b610d4a565b6040517f095ea7b300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660048301527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60248301527f0000000000000000000000000000000000000000000000000000000000000000169063095ea7b3906044016020604051808303815f875af115801561043c573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906104609190611f98565b50565b61046b61063b565b81818160c001515f036104aa576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468260e00151036104e7576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b837f00000000000000000000000000000000000000000000000000000000000000008073ffffffffffffffffffffffffffffffffffffffff16826080015173ffffffffffffffffffffffffffffffffffffffff1614610572576040517f7d6f201300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85806101000151156105b0576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b86806101200151156105ee576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61061e7f000000000000000000000000000000000000000000000000000000000000000033308b60c00151610dbf565b61062888886107ef565b50505050505061063760015f55565b5050565b60025f54036106ab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b60025f55565b5f828082036106ec576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856106fa600185611f60565b81811061070957610709611fba565b905060200281019061071b9190611fe7565b61072c906080810190606001612023565b90505f61073882610e7b565b905073ffffffffffffffffffffffffffffffffffffffff82166107625761075f3482611f60565b90505b5f61076d8888610ec5565b90506107798888610fcf565b6107868a8989898561103b565b5f8261079185610e7b565b61079b9190611f60565b9050898110156107e1576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044016106a2565b9a9950505050505050505050565b61083b7f00000000000000000000000000000000000000000000000000000000000000007f000000000000000000000000000000000000000000000000000000000000000083356111fd565b60c08201515f9061084e90833590611f60565b60a084015190915073ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f114610a1e5760a083015173ffffffffffffffffffffffffffffffffffffffff166108d7576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16638e0250ee826109218660e0015161126b565b60a087015173ffffffffffffffffffffffffffffffffffffffff167f00000000000000000000000000000000000000000000000000000000000000005f602089013561097360808b0160608c0161203c565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b168152600481019790975263ffffffff9586166024880152604487019490945273ffffffffffffffffffffffffffffffffffffffff9092166064860152608485015260a48401521660c482015260e4015f604051808303815f87803b158015610a03575f5ffd5b505af1158015610a15573d5f5f3e3d5ffd5b50505050610bcc565b6040820135610a59576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16638e0250ee82610aa38660e0015161126b565b60408601357f00000000000000000000000000000000000000000000000000000000000000005f6020890135610adf60808b0160608c0161203c565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b168152600481019790975263ffffffff9586166024880152604487019490945273ffffffffffffffffffffffffffffffffffffffff9092166064860152608485015260a48401521660c482015260e4015f604051808303815f87803b158015610b6f575f5ffd5b505af1158015610b81573d5f5f3e3d5ffd5b505050508260e00151835f01517f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c8460400135604051610bc391815260200190565b60405180910390a35b60c08301517f324bb680d8f34b685b89431a2429f01c9b71c00ab9a18e3ad887c464200f1c5b908335610c05608086016060870161203c565b60408051938452602084019290925263ffffffff169082015260600160405180910390a17fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1604051806101400160405280855f015181526020018560200151815260200185604001518152602001856060015173ffffffffffffffffffffffffffffffffffffffff168152602001856080015173ffffffffffffffffffffffffffffffffffffffff1681526020018560a0015173ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018560e001518152602001856101000151151581526020018561012001511515815250604051610d0891906120ab565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff8316610d3f57610d3a82826113bf565b505050565b610d3a8383836111fd565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610dbd576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b73ffffffffffffffffffffffffffffffffffffffff8416610e0c576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610e59576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61035d73ffffffffffffffffffffffffffffffffffffffff851684848461142c565b5f73ffffffffffffffffffffffffffffffffffffffff821615610ebd57610eb873ffffffffffffffffffffffffffffffffffffffff831630611484565b610ebf565b475b92915050565b6060815f8167ffffffffffffffff811115610ee257610ee2611c29565b604051908082528060200260200182016040528015610f0b578160200160208202803683370190505b5090505f5f5b83811015610fc457868682818110610f2b57610f2b611fba565b9050602002810190610f3d9190611fe7565b610f4e906080810190606001612023565b9150610f5982610e7b565b838281518110610f6b57610f6b611fba565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610fbc5734838281518110610fa457610fa4611fba565b60200260200101818151610fb89190611f60565b9052505b600101610f11565b509095945050505050565b5f5b81811015610d3a5736838383818110610fec57610fec611fba565b9050602002810190610ffe9190611fe7565b905061101060e0820160c083016121be565b15611032576110326110286060830160408401612023565b82608001356114b7565b50600101610fd1565b83838383825f5b818110156111e357368a8a8381811061105d5761105d611fba565b905060200281019061106f9190611fe7565b905061109e6110846060830160408401612023565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061110057506111006110b76040830160208401612023565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561111757506111176110b76020830183612023565b801561119a575061119a61112e60a08301836121d9565b61113c916004915f91612241565b61114591612268565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b6111d0576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111da8c82611567565b50600101611042565b50506111f2848484845f6117da565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff821661124a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d3a73ffffffffffffffffffffffffffffffffffffffff841683836119f1565b5f8160010361127b57505f919050565b8161a86a0361128c57506001919050565b81600a0361129c57506002919050565b8161a4b1036112ad57506003919050565b660416edef1601be82036112c357506005919050565b81612105036112d457506006919050565b816089036112e457506007919050565b816082036112f45750600a919050565b8161e708036113055750600b919050565b8162013d48036113175750600c919050565b816092036113275750600d919050565b816101e0036113385750600e919050565b816105310361134957506010919050565b8160320361135957506012919050565b816103e70361136a57506013919050565b8161def10361137b57506015919050565b81620182320361138d57506016919050565b6040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661140c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61063773ffffffffffffffffffffffffffffffffffffffff831682611a3a565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661147757637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b805f036114f0576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166115455780341015610637576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61063773ffffffffffffffffffffffffffffffffffffffff831633308461142c565b61157f6115776020830183612023565b6017903b1190565b6115b5576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f8190036115f4576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6116086110846060850160408601612023565b611612575f611618565b82608001355b90505f61163361162e6080860160608701612023565b610e7b565b9050815f036116695761166961164f6060860160408701612023565b61165f6040870160208801612023565b8660800135611a53565b5f806116786020870187612023565b73ffffffffffffffffffffffffffffffffffffffff168461169c60a08901896121d9565b6040516116aa9291906122ce565b5f6040518083038185875af1925050503d805f81146116e4576040519150601f19603f3d011682016040523d82523d5f602084013e6116e9565b606091505b5091509150816116fc576116fc81611a7f565b5f61171061162e6080890160608a01612023565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861174160208a018a612023565b61175160608b0160408c01612023565b61176160808c0160608d01612023565b8b60800135898711611773578661177d565b61177d8a88611f60565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826117e9600182611f60565b8181106117f8576117f8611fba565b905060200281019061180a9190611fe7565b61181b906080810190606001612023565b90505f5f5f5f5f5f5f5b888110156119e15761183860018a611f60565b81108015611847575088600114155b15611922578d8d8281811061185e5761185e611fba565b90506020028101906118709190611fe7565b611881906080810190606001612023565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611922578a81815181106118c8576118c8611fba565b60200260200101516118d987610e7b565b6118e39190611f60565b965073ffffffffffffffffffffffffffffffffffffffff861615611907575f611909565b895b93508387111561192257611922868d61034c878b611f60565b8d8d8281811061193457611934611fba565b90506020028101906119469190611fe7565b611957906060810190604001612023565b945061196285610e7b565b925073ffffffffffffffffffffffffffffffffffffffff851615611986575f611988565b895b915081831180156119c557508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156119d9576119d9858d61034c8587611f60565b600101611825565b5050505050505050505050505050565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611a31576390b8ec185f526004601cfd5b5f603452505050565b5f385f3884865af16106375763b12d13eb5f526004601cfd5b610d3a8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611a89565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff84161561035d5773ffffffffffffffffffffffffffffffffffffffff8316611af2576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611b65573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611b8991906122dd565b101561035d5761035d73ffffffffffffffffffffffffffffffffffffffff8516848381601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611a31575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611a3157633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611c7a57611c7a611c29565b60405290565b5f82601f830112611c8f575f5ffd5b813567ffffffffffffffff811115611ca957611ca9611c29565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611cf657611cf6611c29565b604052818152838201602001851015611d0d575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611d4c575f5ffd5b919050565b8015158114610460575f5ffd5b8035611d4c81611d51565b5f6101408284031215611d7a575f5ffd5b611d82611c56565b823581529050602082013567ffffffffffffffff811115611da1575f5ffd5b611dad84828501611c80565b602083015250604082013567ffffffffffffffff811115611dcc575f5ffd5b611dd884828501611c80565b604083015250611dea60608301611d29565b6060820152611dfb60808301611d29565b6080820152611e0c60a08301611d29565b60a082015260c0828101359082015260e08083013590820152611e326101008301611d5e565b610100820152611e456101208301611d5e565b61012082015292915050565b5f60808284031215611e61575f5ffd5b50919050565b5f5f5f5f60c08587031215611e7a575f5ffd5b843567ffffffffffffffff811115611e90575f5ffd5b611e9c87828801611d69565b945050602085013567ffffffffffffffff811115611eb8575f5ffd5b8501601f81018713611ec8575f5ffd5b803567ffffffffffffffff811115611ede575f5ffd5b8760208260051b8401011115611ef2575f5ffd5b60209190910193509150611f098660408701611e51565b905092959194509250565b5f5f60a08385031215611f25575f5ffd5b823567ffffffffffffffff811115611f3b575f5ffd5b611f4785828601611d69565b925050611f578460208501611e51565b90509250929050565b81810381811115610ebf577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f60208284031215611fa8575f5ffd5b8151611fb381611d51565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612019575f5ffd5b9190910192915050565b5f60208284031215612033575f5ffd5b611fb382611d29565b5f6020828403121561204c575f5ffd5b813563ffffffff81168114611fb3575f5ffd5b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526120d261016084018261205f565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261210d828261205f565b9150506060840151612137608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516121a661012085018215159052565b50610120840151801515610140850152509392505050565b5f602082840312156121ce575f5ffd5b8135611fb381611d51565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261220c575f5ffd5b83018035915067ffffffffffffffff821115612226575f5ffd5b60200191503681900382131561223a575f5ffd5b9250929050565b5f5f8585111561224f575f5ffd5b8386111561225b575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156122c7577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f602082840312156122ed575f5ffd5b505191905056fea26469706673582212206e14da9a0485bde99650256240643d6f6475776fa6e08fde299275edb3131f9c64736f6c634300081d0033";
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
