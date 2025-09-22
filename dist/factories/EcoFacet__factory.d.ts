import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { EcoFacet, EcoFacetInterface } from "../EcoFacet";
type EcoFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class EcoFacet__factory extends ContractFactory {
    constructor(...args: EcoFacetConstructorParams);
    deploy(_portal: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<EcoFacet>;
    getDeployTransaction(_portal: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): EcoFacet;
    connect(signer: Signer): EcoFacet__factory;
    static readonly bytecode = "0x60e0604052632b6653dc60a05263536f6c4d60c05234801561001f575f5ffd5b506040516127af3803806127af83398101604081905261003e91610076565b6001600160a01b038116610065576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b03166080526100a3565b5f60208284031215610086575f5ffd5b81516001600160a01b038116811461009c575f5ffd5b9392505050565b60805160a05160c0516126d56100da5f395f6111a901525f61117401525f818160480152818161094c015261097301526126d55ff3fe608060405260043610610033575f3560e01c80630ff754ea146100375780632c6c215e14610093578063b8b161bc146100a8575b5f5ffd5b348015610042575f5ffd5b5061006a7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6100a66100a1366004611fa7565b6100bb565b005b6100a66100b636600461206d565b610363565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610136576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61014634476120ff565b905086806101000151610185576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101a88160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101df576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361021c576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610259576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8880610120015115610297576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102a18a886105c0565b5f6102c48b6080015173ffffffffffffffffffffffffffffffffffffffff161590565b6102ce575f6102d4565b87608001355b90506102eb8b5f01518c60c001518c8c3386610746565b60c08c015260808b015173ffffffffffffffffffffffffffffffffffffffff161561032a5787608001358b60c0015161032491906120ff565b60c08c01525b6103348b896108e2565b50479250505081811115610356576103565f8461035185856120ff565b610a3e565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016103de576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6103ee34476120ff565b9050846104138160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561044a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610487576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104c4576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610502576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610540576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61054a88886105c0565b60c0880151608089015173ffffffffffffffffffffffffffffffffffffffff16156105805761057d608089013582612112565b90505b61058e896080015182610a73565b61059889896108e2565b504792505050818111156105b5576105b55f8461035185856120ff565b50505f909155505050565b6105cd60a0820182612125565b90505f03610607576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f1148015610650575061064c6020820182612125565b1590505b15610687576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f11480159061070157506106cd602082018261218d565b73ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1614155b15610738576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107428282610b23565b5050565b5f83808203610781576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f868661078f6001856120ff565b81811061079e5761079e6121af565b90506020028101906107b091906121dc565b6107c190608081019060600161218d565b90505f6107cd82610c1c565b905073ffffffffffffffffffffffffffffffffffffffff82166107f7576107f434826120ff565b90505b5f6108028989610c66565b905061080e8989610d70565b604080516060810182528c815273ffffffffffffffffffffffffffffffffffffffff89166020820152908101879052610849818b8b85610ddc565b5f8361085486610c1c565b61085e91906120ff565b905073ffffffffffffffffffffffffffffffffffffffff85166108885761088588826120ff565b90505b8b8110156108d0576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018d90526024810182905260440160405180910390fd5b955050505050505b9695505050505050565b5f610905836080015173ffffffffffffffffffffffffffffffffffffffff161590565b90505f82608001358460c0015161091c9190612112565b90505f61092b85858585610fac565b90505f61093b8660e00151611162565b9050836109715761097186608001517f000000000000000000000000000000000000000000000000000000000000000085611213565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663df00f8fa856109b8575f6109ba565b845b836109c860a08a018a612125565b875f6040518763ffffffff1660e01b81526004016109ea95949392919061225f565b604080518083038185885af1158015610a05573d5f5f3e3d5ffd5b50505050506040513d601f19601f82011682018060405250810190610a2a9190612363565b5050610a36868661123f565b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610a6857610a638282611311565b505050565b610a6383838361137e565b805f03610aac576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610b015780341015610742576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61074273ffffffffffffffffffffffffffffffffffffffff83163330846113ec565b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff1603610b8957660416edef1601be8260e00151036107425761074281611444565b610b968260e0015161154b565b15610742575f610bb1610bac60a0840184612125565b611569565b90508260a0015173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610a63576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff821615610c5e57610c5973ffffffffffffffffffffffffffffffffffffffff831630611692565b610c60565b475b92915050565b6060815f8167ffffffffffffffff811115610c8357610c83611d66565b604051908082528060200260200182016040528015610cac578160200160208202803683370190505b5090505f5f5b83811015610d6557868682818110610ccc57610ccc6121af565b9050602002810190610cde91906121dc565b610cef90608081019060600161218d565b9150610cfa82610c1c565b838281518110610d0c57610d0c6121af565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610d5d5734838281518110610d4557610d456121af565b60200260200101818151610d5991906120ff565b9052505b600101610cb2565b509095945050505050565b5f5b81811015610a635736838383818110610d8d57610d8d6121af565b9050602002810190610d9f91906121dc565b9050610db160e0820160c08301612391565b15610dd357610dd3610dc9606083016040840161218d565b8260800135610a73565b50600101610d72565b60208401516040850151849184918490835f5b81811015610f9257368a8a83818110610e0a57610e0a6121af565b9050602002810190610e1c91906121dc565b9050610e4b610e31606083016040840161218d565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610ead5750610ead610e64604083016020840161218d565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610ec45750610ec4610e64602083018361218d565b8015610f475750610f47610edb60a0830183612125565b610ee9916004915f916123aa565b610ef2916123d1565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610f7d576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b51610f8990826116c5565b50600101610def565b5050610fa18585858585611938565b505050505050505050565b6110106040518060a001604052805f67ffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f8152602001606081525090565b6060836110a55760408051600180825281830190925290816020015b604080518082019091525f808252602082015281526020019060019003908161102c5790505090506040518060400160405280876080015173ffffffffffffffffffffffffffffffffffffffff16815260200184815250815f81518110611095576110956121af565b60200260200101819052506110e4565b604080515f80825260208201909252906110e0565b604080518082019091525f80825260208201528152602001906001900390816110ba5790505b5090505b6040805160a08101909152806111006080880160608901612437565b67ffffffffffffffff168152336020820152604090810190611128906060890190890161218d565b73ffffffffffffffffffffffffffffffffffffffff1681526020018561114e575f611150565b845b81526020019190915295945050505050565b5f6606b2787ad08cbc820361119857507f0000000000000000000000000000000000000000000000000000000000000000919050565b660416edef1601be82036111cd57507f0000000000000000000000000000000000000000000000000000000000000000919050565b67ffffffffffffffff82111561120f576040517f35be3ac800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5090565b610a638383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611b4f565b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff16036112d65760e082015182517ff9b69f466270c99522169d563c0a430e88c52865ec33b1cc36ee2a4a6ea5170b6112bf6020850185612125565b6040516112cd92919061245e565b60405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161130591906124c5565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff821661135e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61074273ffffffffffffffffffffffffffffffffffffffff831682611c7c565b73ffffffffffffffffffffffffffffffffffffffff82166113cb576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a6373ffffffffffffffffffffffffffffffffffffffff84168383611c95565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661143757637939f4245f526004601cfd5b5f60605260405250505050565b602061145360a0830183612125565b9050101561148d576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61149b60a0830183612125565b6114a9916020915f916123aa565b6114b2916125d8565b90506114c16020830183612125565b159050806114dd5750602c6114d96020840184612125565b9050115b15611514576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80610742576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f660416edef1601be820361156157505f919050565b506001919050565b5f8160448110156115a6576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6115b26044836120ff565b90505f8582866115c3826004612112565b926115d0939291906123aa565b6115d9916123d1565b90507fffffffff0000000000000000000000000000000000000000000000000000000081167fa9059cbb0000000000000000000000000000000000000000000000000000000014611656576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8585611663846010612112565b9061166f856024612112565b9261167c939291906123aa565b61168591612614565b60601c9695505050505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6116dd6116d5602083018361218d565b6017903b1190565b611713576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611752576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611766610e31606085016040860161218d565b611770575f611776565b82608001355b90505f61179161178c608086016060870161218d565b610c1c565b9050815f036117c7576117c76117ad606086016040870161218d565b6117bd604087016020880161218d565b8660800135611213565b5f806117d6602087018761218d565b73ffffffffffffffffffffffffffffffffffffffff16846117fa60a0890189612125565b604051611808929190612679565b5f6040518083038185875af1925050503d805f8114611842576040519150601f19603f3d011682016040523d82523d5f602084013e611847565b606091505b50915091508161185a5761185a81611cde565b5f61186e61178c6080890160608a0161218d565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861189f60208a018a61218d565b6118af60608b0160408c0161218d565b6118bf60808c0160608d0161218d565b8b608001358987116118d157866118db565b6118db8a886120ff565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826119476001826120ff565b818110611956576119566121af565b905060200281019061196891906121dc565b61197990608081019060600161218d565b90505f5f5f5f5f5f5f5b88811015611b3f5761199660018a6120ff565b811080156119a5575088600114155b15611a80578d8d828181106119bc576119bc6121af565b90506020028101906119ce91906121dc565b6119df90608081019060600161218d565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611a80578a8181518110611a2657611a266121af565b6020026020010151611a3787610c1c565b611a4191906120ff565b965073ffffffffffffffffffffffffffffffffffffffff861615611a65575f611a67565b895b935083871115611a8057611a80868d610351878b6120ff565b8d8d82818110611a9257611a926121af565b9050602002810190611aa491906121dc565b611ab590606081019060400161218d565b9450611ac085610c1c565b925073ffffffffffffffffffffffffffffffffffffffff851615611ae4575f611ae6565b895b91508183118015611b2357508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b15611b3757611b37858d61035185876120ff565b600101611983565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff841615611c765773ffffffffffffffffffffffffffffffffffffffff8316611bb8576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611c2b573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611c4f9190612688565b1015611c7657611c7673ffffffffffffffffffffffffffffffffffffffff85168483611ce8565b50505050565b5f385f3884865af16107425763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611cd5576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611cd5575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611cd557633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611db757611db7611d66565b60405290565b5f82601f830112611dcc575f5ffd5b813567ffffffffffffffff811115611de657611de6611d66565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611e3357611e33611d66565b604052818152838201602001851015611e4a575f5ffd5b816020850160208301375f918101602001919091529392505050565b73ffffffffffffffffffffffffffffffffffffffff81168114611e87575f5ffd5b50565b8035611e9581611e66565b919050565b80358015158114611e95575f5ffd5b5f6101408284031215611eba575f5ffd5b611ec2611d93565b823581529050602082013567ffffffffffffffff811115611ee1575f5ffd5b611eed84828501611dbd565b602083015250604082013567ffffffffffffffff811115611f0c575f5ffd5b611f1884828501611dbd565b604083015250611f2a60608301611e8a565b6060820152611f3b60808301611e8a565b6080820152611f4c60a08301611e8a565b60a082015260c0828101359082015260e08083013590820152611f726101008301611e9a565b610100820152611f856101208301611e9a565b61012082015292915050565b5f60c08284031215611fa1575f5ffd5b50919050565b5f5f5f5f60608587031215611fba575f5ffd5b843567ffffffffffffffff811115611fd0575f5ffd5b611fdc87828801611ea9565b945050602085013567ffffffffffffffff811115611ff8575f5ffd5b8501601f81018713612008575f5ffd5b803567ffffffffffffffff81111561201e575f5ffd5b8760208260051b8401011115612032575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115612055575f5ffd5b61206187828801611f91565b91505092959194509250565b5f5f6040838503121561207e575f5ffd5b823567ffffffffffffffff811115612094575f5ffd5b6120a085828601611ea9565b925050602083013567ffffffffffffffff8111156120bc575f5ffd5b6120c885828601611f91565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610c6057610c606120d2565b80820180821115610c6057610c606120d2565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612158575f5ffd5b83018035915067ffffffffffffffff821115612172575f5ffd5b602001915036819003821315612186575f5ffd5b9250929050565b5f6020828403121561219d575f5ffd5b81356121a881611e66565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261220e575f5ffd5b9190910192915050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b67ffffffffffffffff86168152608060208201525f612282608083018688612218565b828103604084015260a0810167ffffffffffffffff865116825273ffffffffffffffffffffffffffffffffffffffff602087015116602083015273ffffffffffffffffffffffffffffffffffffffff604087015116604083015260608601516060830152608086015160a0608084015281815180845260c0850191506020830194505f93505b8084101561234f578451925073ffffffffffffffffffffffffffffffffffffffff835116825260208301516020830152604082019150602085019450600184019350612308565b50861515606087015293506108d892505050565b5f5f60408385031215612374575f5ffd5b82519150602083015161238681611e66565b809150509250929050565b5f602082840312156123a1575f5ffd5b6121a882611e9a565b5f5f858511156123b8575f5ffd5b838611156123c4575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612430577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f60208284031215612447575f5ffd5b813567ffffffffffffffff811681146121a8575f5ffd5b602081525f612471602083018486612218565b949350505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526124ec610160840182612479565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526125278282612479565b9150506060840151612551608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516125c061012085018215159052565b50610120840151801515610140850152509392505050565b80356020831015610c60577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b1692915050565b80357fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008116906014841015612430577fffffffffffffffffffffffffffffffffffffffff000000000000000000000000808560140360031b1b82161691505092915050565b818382375f9101908152919050565b5f60208284031215612698575f5ffd5b505191905056fea2646970667358221220d0751ad35cd0db24c85bb367628e133bf5887fd5dc81e4a9db50aee280caab3464736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_portal";
            readonly type: "address";
            readonly internalType: "contract IEcoPortal";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "PORTAL";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IEcoPortal";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaEco";
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
            readonly name: "_ecoData";
            readonly type: "tuple";
            readonly internalType: "struct EcoFacet.EcoData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonEVMReceiver";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "prover";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "rewardDeadline";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "solverReward";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "encodedRoute";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaEco";
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
            readonly name: "_ecoData";
            readonly type: "tuple";
            readonly internalType: "struct EcoFacet.EcoData";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "nonEVMReceiver";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "prover";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "rewardDeadline";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "solverReward";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "encodedRoute";
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
    static createInterface(): EcoFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): EcoFacet;
}
export {};
